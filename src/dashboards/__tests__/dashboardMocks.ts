/* eslint-disable max-len */
import { PortFolioDashBoardDTO } from "@/services/dashboards";

/* eslint-disable camelcase */
/* pragma: allowlist-secret not actually a secret */
export const  mockDashboardData:PortFolioDashBoardDTO = {
  taskOrder: {
    clins: "aa5e0a5387141d10bc86b889cebb354d,6a82429b87d01d10bc86b889cebb35b3,ab30929387141d10bc86b889cebb359b",
    incrementally_funded: "",
    funds_obligated: "150000",
    sys_mod_count: "6",
    acquisition_package: "a1b490df87809110bc86b889cebb359c",  /* pragma: allowlist-secret not actually a secret"*/
    task_order_number: "1000000001234",  /* pragma: allowlist-secret not actually a secret"*/
    sys_updated_on: "2022-07-13 16:06:27",
    sys_tags: "",
    task_order_status: "ACTIVE",
    sys_id: "fead8adf87d01d10bc86b889cebb35fc",  
    sys_updated_by: "eric.youngquist-ctr@ccpo.mil",
    portfolio: "bbdd861387141d10bc86b889cebb35aa",  /* pragma: allowlist-secret not actually a secret"*/
    sys_created_on: "2022-06-30 14:51:38",
    funding_plan: "",
    pop_end_date: "2022-12-31",
    pop_start_date: "2022-01-01",
    funds_total: "200000",
    sys_created_by: "julius.fitzhugh-ctr@ccpo.mil"
  },
  clins: [
    {
      funds_obligated: "200000",
      sys_mod_count: "10",
      sys_updated_on: "2022-07-12 19:39:24",
      sys_tags: "",
      sys_id: "6a82429b87d01d10bc86b889cebb35b3",
      clin_number: "0001",
      sys_updated_by: "eric.youngquist-ctr@ccpo.mil",
      sys_created_on: "2022-06-30 14:25:12",
      idiq_clin: "0001",
      pop_end_date: "2022-12-31",
      pop_start_date: "2022-01-01",
      clin_status: "ACTIVE",
      funds_total: "220000",
      sys_created_by: "julius.fitzhugh-ctr@ccpo.mil",
      idiq_clin_label: "Unclassified XaaS"
    },
    {
      funds_obligated: "70000",
      sys_mod_count: "6",
      sys_updated_on: "2022-07-13 16:02:39",
      sys_tags: "",
      sys_id: "ab30929387141d10bc86b889cebb359b",
      clin_number: "0003",
      sys_updated_by: "eric.youngquist-ctr@ccpo.mil",
      sys_created_on: "2022-06-30 15:01:03",
      idiq_clin: "0002",
      pop_end_date: "2022-12-31",
      pop_start_date: "2022-01-01",
      clin_status: "ACTIVE",
      funds_total: "100000",
      sys_created_by: "julius.fitzhugh-ctr@ccpo.mil",
      idiq_clin_label: "Unclassified Cloud Support"
    },
    {
      funds_obligated: "20000",
      sys_mod_count: "7",
      sys_updated_on: "2022-07-13 16:02:54",
      sys_tags: "",
      sys_id: "aa5e0a5387141d10bc86b889cebb354d",
      clin_number: "0002",
      sys_updated_by: "eric.youngquist-ctr@ccpo.mil",
      sys_created_on: "2022-06-30 14:53:05",
      idiq_clin: "0003",
      pop_end_date: "2022-12-31",
      pop_start_date: "2022-01-01",
      clin_status: "ACTIVE",
      funds_total: "30000",
      sys_created_by: "julius.fitzhugh-ctr@ccpo.mil",
      idiq_clin_label: "Ordering Agency Fee"
    }
  ],
  costs: [
    {
      clin: "0003",
      csp: "1c91c09b87dc1d10ec3b777acebb352e",  /* pragma: allowlist-secret not actually a secret"*/
      year_month: "2022-01-01",
      "csp.name": "CSP_B",
      portfolio: "bbdd861387141d10bc86b889cebb35aa",      /* pragma: allowlist-secret not actually a secret"*/
      organization: "83a01e5387141d10bc86b889cebb35e1",  /* pragma: allowlist-secret not actually a secret"*/
      service_agency: "US_NAVY",
      task_order_number: "1000000001234",
      is_actual: "true",
      value: "6500"
    },
    {
      clin: "0002",
      csp: "2b47282d87941910ec3b777acebb3508",  /* pragma: allowlist-secret not actually a secret"*/
      year_month: "2022-01-01",
      "csp.name": "CSP_A",
      portfolio: "bbdd861387141d10bc86b889cebb35aa",  /* pragma: allowlist-secret not actually a secret"*/
      organization: "83a01e5387141d10bc86b889cebb35e1",  /* pragma: allowlist-secret not actually a secret"*/
      service_agency: "US_NAVY",
      task_order_number: "1000000001234",
      is_actual: "true",
      value: "2000"
    },
    {
      clin: "0001",
      csp: "2b47282d87941910ec3b777acebb3508",  /* pragma: allowlist-secret not actually a secret"*/
      year_month: "2022-01-01",
      "csp.name": "CSP_A",
      portfolio: "bbdd861387141d10bc86b889cebb35aa",  /* pragma: allowlist-secret not actually a secret"*/
      organization: "83a01e5387141d10bc86b889cebb35e1",  /* pragma: allowlist-secret not actually a secret"*/
      service_agency: "US_NAVY",
      task_order_number: "1000000001234",
      is_actual: "true",
      value: "12000"
    },
    {
      clin: "0002",
      csp: "2b47282d87941910ec3b777acebb3508",  /* pragma: allowlist-secret not actually a secret"*/
      year_month: "2022-02-01",
      "csp.name": "CSP_A",
      portfolio: "bbdd861387141d10bc86b889cebb35aa",   /* pragma: allowlist-secret not actually a secret"*/
      organization: "83a01e5387141d10bc86b889cebb35e1",  /* pragma: allowlist-secret not actually a secret"*/
      service_agency: "US_NAVY",
      task_order_number: "1000000001234",
      is_actual: "true",
      value: "1800"
    },
    {
      clin: "0001",
      csp: "2b47282d87941910ec3b777acebb3508",  /* pragma: allowlist-secret not actually a secret"*/
      year_month: "2022-02-01",
      "csp.name": "CSP_A",
      portfolio: "bbdd861387141d10bc86b889cebb35aa",  /* pragma: allowlist-secret not actually a secret"*/
      organization: "83a01e5387141d10bc86b889cebb35e1",  /* pragma: allowlist-secret not actually a secret"*/
      service_agency: "US_NAVY",
      task_order_number: "1000000001234",
      is_actual: "true",
      value: "34320"
    },
    {
      clin: "0001",
      csp: "2b47282d87941910ec3b777acebb3508",  /* pragma: allowlist-secret not actually a secret"*/
      year_month: "2022-03-01",
      "csp.name": "CSP_A",
      portfolio: "bbdd861387141d10bc86b889cebb35aa",  /* pragma: allowlist-secret not actually a secret"*/
      organization: "83a01e5387141d10bc86b889cebb35e1",  /* pragma: allowlist-secret not actually a secret"*/
      service_agency: "US_NAVY",
      task_order_number: "1000000001234",
      is_actual: "true",
      value: "12148"
    },
    {
      clin: "0003",
      csp: "1c91c09b87dc1d10ec3b777acebb352e",  /* pragma: allowlist-secret not actually a secret"*/
      year_month: "2022-04-01",
      "csp.name": "CSP_B", 
      portfolio: "bbdd861387141d10bc86b889cebb35aa", /* pragma: allowlist-secret not actually a secret"*/
      organization: "83a01e5387141d10bc86b889cebb35e1",  /* pragma: allowlist-secret not actually a secret"*/
      service_agency: "US_NAVY",
      task_order_number: "1000000001234",
      is_actual: "true",
      value: "5800"
    },
    {
      clin: "0002",
      csp: "2b47282d87941910ec3b777acebb3508",  /* pragma: allowlist-secret not actually a secret"*/
      year_month: "2022-04-01",
      "csp.name": "CSP_A",
      portfolio: "bbdd861387141d10bc86b889cebb35aa",  /* pragma: allowlist-secret not actually a secret"*/
      organization: "83a01e5387141d10bc86b889cebb35e1",  /* pragma: allowlist-secret not actually a secret"*/
      service_agency: "US_NAVY",
      task_order_number: "1000000001234",
      is_actual: "true",
      value: "1600"
    },
    {
      clin: "0001",
      csp: "2b47282d87941910ec3b777acebb3508",  /* pragma: allowlist-secret not actually a secret"*/
      year_month: "2022-04-01",
      "csp.name": "CSP_A",
      portfolio: "bbdd861387141d10bc86b889cebb35aa",  /* pragma: allowlist-secret not actually a secret"*/
      organization: "83a01e5387141d10bc86b889cebb35e1",  /* pragma: allowlist-secret not actually a secret"*/
      service_agency: "US_NAVY",
      task_order_number: "1000000001234",
      is_actual: "true",
      value: "10120"
    },
    {
      clin: "0003",
      csp: "1c91c09b87dc1d10ec3b777acebb352e",   /* pragma: allowlist-secret not actually a secret"*/
      year_month: "2022-05-01",
      "csp.name": "CSP_B",
      portfolio: "bbdd861387141d10bc86b889cebb35aa",  /* pragma: allowlist-secret not actually a secret"*/
      organization: "83a01e5387141d10bc86b889cebb35e1",  /* pragma: allowlist-secret not actually a secret"*/
      service_agency: "US_NAVY",
      task_order_number: "1000000001234",  /* pragma: allowlist-secret not actually a secret"*/
      is_actual: "true",
      value: "7500"
    },
    {
      clin: "0002",
      csp: "2b47282d87941910ec3b777acebb3508",  /* pragma: allowlist-secret not actually a secret"*/
      year_month: "2022-05-01",
      "csp.name": "CSP_A",
      portfolio: "bbdd861387141d10bc86b889cebb35aa",  /* pragma: allowlist-secret not actually a secret"*/
      organization: "83a01e5387141d10bc86b889cebb35e1",  /* pragma: allowlist-secret not actually a secret"*/
      service_agency: "US_NAVY",
      task_order_number: "1000000001234",
      is_actual: "true",
      value: "1800"
    },
    {
      clin: "0001",
      csp: "2b47282d87941910ec3b777acebb3508",  /* pragma: allowlist-secret not actually a secret"*/
      year_month: "2022-05-01",
      "csp.name": "CSP_A",
      portfolio: "bbdd861387141d10bc86b889cebb35aa",  /* pragma: allowlist-secret not actually a secret"*/
      organization: "83a01e5387141d10bc86b889cebb35e1",  /* pragma: allowlist-secret not actually a secret"*/
      service_agency: "US_NAVY",
      task_order_number: "1000000001234",  /* pragma: allowlist-secret not actually a secret"*/
      is_actual: "true",
      value: "26137"
    },
    {
      clin: "0003",
      csp: "1c91c09b87dc1d10ec3b777acebb352e",  /* pragma: allowlist-secret not actually a secret"*/
      year_month: "2022-06-01",
      "csp.name": "CSP_B",
      portfolio: "bbdd861387141d10bc86b889cebb35aa",  /* pragma: allowlist-secret not actually a secret"*/
      organization: "83a01e5387141d10bc86b889cebb35e1",  /* pragma: allowlist-secret not actually a secret"*/
      service_agency: "US_NAVY",
      task_order_number: "1000000001234",
      is_actual: "true",
      value: "8000"
    },
    {
      clin: "0002",
      csp: "2b47282d87941910ec3b777acebb3508",  /* pragma: allowlist-secret not actually a secret"*/
      year_month: "2022-06-01",
      "csp.name": "CSP_A",
      portfolio: "bbdd861387141d10bc86b889cebb35aa",  /* pragma: allowlist-secret not actually a secret"*/
      organization: "83a01e5387141d10bc86b889cebb35e1",  /* pragma: allowlist-secret not actually a secret"*/
      service_agency: "US_NAVY",
      task_order_number: "1000000001234",
      is_actual: "true",
      value: "1000"
    },
    {
      clin: "0001",
      csp: "2b47282d87941910ec3b777acebb3508",  /* pragma: allowlist-secret not actually a secret"*/
      year_month: "2022-06-01",
      "csp.name": "CSP_A",
      portfolio: "bbdd861387141d10bc86b889cebb35aa",   /* pragma: allowlist-secret not actually a secret"*/
      organization: "83a01e5387141d10bc86b889cebb35e1",  /* pragma: allowlist-secret not actually a secret"*/
      service_agency: "US_NAVY",
      task_order_number: "1000000001234",
      is_actual: "true",
      value: "24165"
    },
    {
      clin: "0003",
      csp: "1c91c09b87dc1d10ec3b777acebb352e",  /* pragma: allowlist-secret not actually a secret"*/ 
      year_month: "2022-07-01",
      "csp.name": "CSP_B",
      portfolio: "bbdd861387141d10bc86b889cebb35aa",  /* pragma: allowlist-secret not actually a secret"*/
      organization: "83a01e5387141d10bc86b889cebb35e1",  /* pragma: allowlist-secret not actually a secret"*/
      service_agency: "US_NAVY",
      task_order_number: "1000000001234",
      is_actual: "false",
      value: "5000"
    },
    {
      clin: "0002",
      csp: "2b47282d87941910ec3b777acebb3508",  /* pragma: allowlist-secret not actually a secret"*/
      year_month: "2022-07-01",
      "csp.name": "CSP_A",
      portfolio: "bbdd861387141d10bc86b889cebb35aa",  /* pragma: allowlist-secret not actually a secret"*/
      organization: "83a01e5387141d10bc86b889cebb35e1",  /* pragma: allowlist-secret not actually a secret"*/
      service_agency: "US_NAVY",
      task_order_number: "1000000001234",
      is_actual: "false",
      value: "1500"
    },
    {
      clin: "0001",
      csp: "2b47282d87941910ec3b777acebb3508",  /* pragma: allowlist-secret not actually a secret"*/
      year_month: "2022-07-01",
      "csp.name": "CSP_A",
      portfolio: "bbdd861387141d10bc86b889cebb35aa",  /* pragma: allowlist-secret not actually a secret"*/
      organization: "83a01e5387141d10bc86b889cebb35e1",  /* pragma: allowlist-secret not actually a secret"*/
      service_agency: "US_NAVY",
      task_order_number: "1000000001234",
      is_actual: "false",
      value: "14510"
    }
  ]
}