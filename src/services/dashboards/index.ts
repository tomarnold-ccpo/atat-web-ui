import api from "@/api";
import { ClinDTO, CostsDTO, TaskOrderDTO } from "@/api/models";
import { AxiosRequestConfig } from "axios";
import { TABLENAME as ClinTable } from "@/api/clin";
import {groupBy} from "lodash";

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
  total: number;
}


const buildCostGroups = (costs:CostsDTO[]): CostGroup[] => {
  costs.sort((a,b)=> Date.parse(b.year_month) - Date.parse(a.year_month));
  const groups = groupBy(costs, 'year_month');
  const costGroups: CostGroup[] = [];

  for (const [key, value] of Object.entries(groups)) {
    costGroups.push(
      {
        yearMonth: key,
        costs: value,
        total: value.reduce<number>((prev, current)=> {
          const total = prev + current.is_actual ? Number(current.value) : 0;
          return total;  
        }, 0)
      }
    )
  }

  return costGroups;
    
}


const getCostsTotal = (costGroups:CostGroup[])=> {
  return  costGroups.reduce((accum, cg)=> {
    return accum + cg.total
  }, 0);
}

const getCostAverage = (costGroups:CostGroup[]) => {
  return getCostsTotal(costGroups) / costGroups.length;
}





export class DashboardService{


  public async getdata(taskOrderNumber: string): Promise<PortFolioDashBoardDTO>{

    try {
      const taskOrderRequestConfig: AxiosRequestConfig = {
        params: {
          // eslint-disable-next-line camelcase
          sysparm_query: `task_order_number=${taskOrderNumber}`,
        }
      }
      
      const taskOrders = await api.taskOrderTable.all(taskOrderRequestConfig);
      const taskOrder = taskOrders.length > 0 ? taskOrders[0] : undefined;
    
      
      if(taskOrder === undefined){
        throw new Error(`unable to retrieve task order with number ${taskOrderNumber}`);
      }

      //grab all of the task order clins
      const clinIds = taskOrder.clins.split(',');
      const clinRequests = clinIds.map(clin=> api.clinTable.retrieve(clin));
      let clins = await Promise.all(clinRequests);

      // eslint-disable-next-line camelcase
      const clin_labels = await api.systemChoices.getChoices(ClinTable, "idiq_clin");

      clins = clins.map(clin=> {

        // eslint-disable-next-line camelcase
        const label = clin_labels.find(label=>label.value === clin.idiq_clin);
        if(label){

          // eslint-disable-next-line camelcase
          clin.idiq_clin_label = label.label
        }
         
        return clin;
      });
      
      const popStartDate = taskOrder.pop_start_date;
      const popEndDate = taskOrder.pop_end_date;
      
      let costsQuery = `task_order_number=${taskOrderNumber}`;
      costsQuery+= `^year_monthBETWEENjavascript:gs.dateGenerate('${popStartDate}','start')`;
      costsQuery+= `@javascript:gs.dateGenerate('${popEndDate}','end')`;
      
      const costsRequestConfig: AxiosRequestConfig = {
        params: {
          // eslint-disable-next-line camelcase
          sysparm_query: costsQuery
        }
      }
      
      const costs = await api.costsTable.all(costsRequestConfig);
      
      return {
      
        taskOrder,
        clins,
        costs,
      }
    } catch (error) {
      throw new Error(`error retrieving dashboard data ${error}`);
    } 
  }

  public async getTotals(taskOrderNumbers: string[]): Promise<any> {
    const calls = taskOrderNumbers.map(to=> this.getdata(to));
    const data = await Promise.all(calls);
    const initial:TaskOrderAggregate = {
      activeTaskOrders: 0,
      totalObligatedFunds: 0,
      totalTaskOrderValue: 0,
      costs: []
    };
    const combined = data.reduce<TaskOrderAggregate>((prev: TaskOrderAggregate, current)=>{
      const aggregate = prev as TaskOrderAggregate;
      const activeTaskOrders = aggregate.activeTaskOrders +1;
      const totalObligatedFunds = prev.totalObligatedFunds 
      + current.taskOrder.funds_obligated.length > 0 ? Number(current.taskOrder.funds_obligated): 0;
      const totalTaskOrderValue = prev.totalTaskOrderValue
      + current.taskOrder.funds_total.length > 0 ? Number(current.taskOrder.funds_total) : 0;
      const costs = [...prev.costs, ...current.costs]
        .sort((a,b)=> Date.parse(b.year_month) - Date.parse(a.year_month));

      return {
        activeTaskOrders,
        totalObligatedFunds,
        totalTaskOrderValue,
        costs
      }

         
    }, initial)

    const costGroups = buildCostGroups(combined.costs);

    return {
      ...combined,
      costGroups,
      fundsSpentToDate: getCostsTotal(costGroups)
    }
  }

}