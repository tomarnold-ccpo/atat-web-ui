/* eslint-disable camelcase */
import api from "@/api";
import { ClinDTO, CostsDTO, TaskOrderDTO } from "@/api/models";
import { AxiosRequestConfig } from "axios";
import { TABLENAME as ClinTable } from "@/api/clin";
import { TABLENAME as FundingRequirementTable } from "@/api/fundingRequirement";
import { groupBy } from "lodash";
import { add, endOfDay, format, startOfDay, sub } from "date-fns";

export interface PortFolioDashBoardDTO {
  taskOrder: TaskOrderDTO;
  clins: ClinDTO[];
  costs: CostsDTO[];
}

export interface TaskOrderAggregate {
  activeTaskOrders: number;
  totalObligatedFunds: number;
  totalTaskOrderValue: number;
  costs: CostsDTO[];
}

export interface CostGroup {
  yearMonth: string;
  costs: CostsDTO[];
  totalActual: number;
  totalProjected: number;
}

export interface EntitySpending {
  name: string;
  total: number;
}

export interface AggregateResults {
  result: {
    stats: {
      sum: {
        funds_obligated: string;
        funds_total: string;
      };
    };
  };
}

const buildCostGroups = (costs: CostsDTO[]): CostGroup[] => {
  costs.sort((a, b) => Date.parse(a.year_month) - Date.parse(b.year_month));
  const groups = groupBy(costs, "year_month");
  const costGroups: CostGroup[] = [];

  for (const [key, value] of Object.entries(groups)) {
    costGroups.push({
      yearMonth: key,
      costs: value,
      totalActual: value.reduce<number>((prev, current) => {
        const cost = current.is_actual === "true" ? Number(current.value) : 0;
        const total: number = prev + cost;
        return total;
      }, 0),
      totalProjected: value.reduce<number>((prev, current) => {
        const cost = current.is_actual === "true" ? 0 : Number(current.value);
        const total: number = prev + cost;
        return total;
      }, 0),
    });
  }

  return costGroups;
};

const getCostsTotalActual = (costGroups: CostGroup[]) => {
  return costGroups.reduce((accum, cg) => {
    return accum + cg.totalActual;
  }, 0);
};

const getEntityTotals = (
  costs: CostsDTO[],
  entityName: string
): Record<string, EntitySpending> => {
  const entityGroups = groupBy(costs, entityName);
  const entitySpendings: Record<string, EntitySpending> = {};
  for (const [key, value] of Object.entries(entityGroups)) {
    const total = value.reduce<number>((prev, current) => {
      const cost = current.is_actual === "true" ? Number(current.value) : 0;
      const total = prev + cost;
      return total;
    }, 0);

    entitySpendings[key] = {
      name: key,
      total,
    };
  }

  return entitySpendings;
};

export class DashboardService {

  public async getCLINsInCurrentPeriod(taskOrderSysId: string): Promise<ClinDTO[]> {
    const today = format(new Date().setHours(0,0,0,0), "yyyy-MM-dd")
    
    let query = "task_order=" + taskOrderSysId;
    query += "^pop_end_date>=javascript:gs.dateGenerate('" + today + "', '23:59:59')";
    query += "^pop_start_date<=javascript:gs.dateGenerate('" + today + "', '23:59:59')";

    const fields = "clin_number,clin_status,funds_obligated,funds_total,"
      + "pop_end_date,pop_start_date,sys_id";
    const config: AxiosRequestConfig = {
      params: {
        sysparm_query: query,
        sysparm_fields: fields,
      },
    };

    const clins = await api.clinTable.all(config);
    return clins;
  }

  public async getCostsInCurrentPeriod(clins: string[]): Promise<CostsDTO[]> {
    let query = "clinIN" + clins.join(",");
    const fields =
      "clin,csp,csp.name,year_month," +
      "task_order_number,portfolio,organization,agency.title,is_actual,value";

    const config: AxiosRequestConfig = {
      params: {
        sysparm_query: query,
        sysparm_fields: fields,
      },
    };

    const costs = await api.costsTable.all(config);
    return costs;
  }

  /**
   * Data returned by this function has no impact in the context of relocation of funding related
   * columns to "funding_requirement" table. All the funding related data that is displayed on
   * the UI, comes from the clins and costs table.
   */
  public async getdata(
    taskOrderNumber: string,
    taskOrderSysId: string,
  ): Promise<PortFolioDashBoardDTO> {
    try {
      const taskOrder = await api.taskOrderTable.retrieve(taskOrderSysId);

      if (taskOrder === undefined) {
        throw new Error(
          `unable to retrieve task order with number ${taskOrderNumber}`
        );
      }
      
      // get sys_ids for all clins in current period
      const currentCLINs = await this.getCLINsInCurrentPeriod(taskOrderSysId);
      const clinSysIds = currentCLINs.map(obj => obj.sys_id);

      const clinRequests = clinSysIds.map((clin) => api.clinTable.retrieve(clin));
      let clins = await Promise.all(clinRequests);

      const clin_labels = await api.systemChoices.getChoices(
        ClinTable,
        "idiq_clin"
      );

      clins = clins.map((clin) => {
        const label = clin_labels.find(
          (label) => label.value === clin.idiq_clin
        );
        if (label) {
          clin.idiq_clin_label = label.label;
        }

        return clin;
      });

      const costs = await this.getCostsInCurrentPeriod(clinSysIds)

      // const popStartDate = taskOrder.pop_start_date;
      // const popEndDate = taskOrder.pop_end_date;

      // let costsQuery = `task_order_number=${taskOrderNumber}`;
      // costsQuery += `^year_monthBETWEENjavascript:gs.dateGenerate('${popStartDate}','start')`;
      // costsQuery += `@javascript:gs.dateGenerate('${popEndDate}','end')`;

      // const fields =
      //   "clin,csp,csp.name,year_month," +
      //   "task_order_number,portfolio,organization,agency.title,is_actual,value";

      // const costsRequestConfig: AxiosRequestConfig = {
      //   params: {
      //     sysparm_query: costsQuery,
      //     sysparm_fields: fields,
      //   },
      // };

      // const costs = await api.costsTable.all(costsRequestConfig);
      return {
        taskOrder,
        clins,
        costs,
      };
    } catch (error) {
      throw new Error(`error retrieving dashboard data ${error}`);
    }
  }

  public async getCostsData(taskOrders: TaskOrderDTO[]): Promise<CostsDTO[]> {
    const earliestPopStart = taskOrders.reduce((prev, current) => {
      const currentPoPStart = Date.parse(current.pop_start_date);
      const prevPopStart = Date.parse(prev);
      const dt = currentPoPStart < prevPopStart ? current.pop_start_date : prev;
      return dt;
    }, taskOrders[0].pop_start_date);

    const latestPopEnd = taskOrders.reduce((prev, current) => {
      const currentPoPEnd = Date.parse(current.pop_end_date);
      const prevPopEnd = Date.parse(prev);
      const dt = currentPoPEnd > prevPopEnd ? current.pop_end_date : prev;
      return dt;
    }, taskOrders[0].pop_end_date);

    const taskOrderQuery = taskOrders
      .map((to) => to.task_order_number)
      .reduce((prev, current) => {
        const query = prev
          ? `${prev}^ORtask_order_number=${current}`
          : `task_order_number=${current}`;
        return query;
      }, "");

    let costsQuery = taskOrderQuery;
    costsQuery += `^year_monthBETWEENjavascript:gs.dateGenerate('${earliestPopStart}','start')`;
    costsQuery += `@javascript:gs.dateGenerate('${latestPopEnd}','end')`;

    const costFields =
      "clin,csp,csp.name,year_month," +
      "task_order_number,portfolio,organization,agency.title,is_actual,value";

    const costsRequestConfig: AxiosRequestConfig = {
      params: {
        sysparm_query: costsQuery,
        sysparm_fields: costFields,
      },
    };

    const costs = await api.costsTable.all(costsRequestConfig);

    return costs;
  }

  /**
   * Uses aggregate api response from funding_requirement table and all the data from the task_order
   * and transforms the data as needed by the JWCCDashboard component.
   */
  public async getTotals(taskOrderNumbers: string[]): Promise<any> {
    const taskOrderQuery = taskOrderNumbers.reduce((prev, current) => {
      const query = prev
        ? `${prev}^ORtask_order_number=${current}`
        : `task_order_number=${current}`;
      return query;
    }, "");
    
    const aggregateRequestConfig: AxiosRequestConfig = {
      params: {
        sysparm_sum_fields: "funds_obligated,funds_total",
        sysparm_query: taskOrderQuery,
      },
    };

    const aggregate = await api.aggregate.makeRequest(
      FundingRequirementTable,
      aggregateRequestConfig
    ) as AggregateResults;

    const taskOrderData = await api.taskOrderTable.all({
      params: {
        sysparm_query: taskOrderQuery,
      },
    });

    const costs =
      taskOrderData.length > 0 ? await this.getCostsData(taskOrderData) : [];
    const costGroups = buildCostGroups(costs);

    const aggregateResults = aggregate;
    const totalObligatedFunds = Number(
      aggregateResults.result.stats.sum.funds_obligated
    );
    const totalTaskOrderValue = Number(
      aggregateResults.result.stats.sum.funds_total
    );

    const taskOrderAggregate: TaskOrderAggregate = {
      activeTaskOrders: taskOrderData.length,
      totalObligatedFunds,
      totalTaskOrderValue,
      costs: costs.sort(
        (a, b) => Date.parse(a.year_month) - Date.parse(b.year_month)
      ),
    };

    return {
      ...taskOrderAggregate,
      costGroups,
      fundsSpentToDate: getCostsTotalActual(costGroups),
      fundsSpentByCSP: getEntityTotals(costs, "csp.name"),
      fundsSpentByAgency: getEntityTotals(costs, "agency.title"),
    };
  }
}
