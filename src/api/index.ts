import { AcquisitionPackagesApi } from "./acquisitionPackages";
import { ProjectOverviewApi } from "./projectOverview";
import { OrganizationApi } from "./organization";
import { ContactsApi } from "./contacts";
import { FairOpportunityApi } from "./fairOpportunity";
import { CurrentContractApi } from "./background";
import { ContractConsiderationsApi } from "./contractConsiderations";
import { SensitiveInformationApi } from "./sensitiveInformation";
import { MilitaryRankApi } from "./militaryRanks";
import { SystemChoicesApi } from "./systemChoices";
import { ContractTypeApi, PeriodOfPerformanceApi } from "./contractDetails";
import { GFEOverviewApi } from "./GFEOverview";
import { RequirementsCostEstimateApi } from "./requriementsCostEstimate";
import {StatesApi} from "./states";
import {CountriesApi} from "./countries";
import { FundingPlanApi } from "./fundingPlan";
import { AttachmentApi } from "./attachments";
import { TableApiBase } from "./tableApiBase";
import { AttachableDTO } from "./models";
import { PeriodApi } from "./period";
import { ClassificationLevelApi } from "./classificationLevels";
import { ServiceOfferingApi } from "./serviceOffering";
import { RequiredServicesApi } from "./requiredServices";
import { SelectedServiceOfferingApi } from "./selectedServiceOffering";

export const api = {

  attachments: new AttachmentApi(),
  systemChoices: new SystemChoicesApi(),
  acquisitionPackageTable: new AcquisitionPackagesApi(),
  projectOverviewTable: new ProjectOverviewApi(),
  organizationTable: new OrganizationApi(),
  classificationLevelTable: new ClassificationLevelApi(),
  classificationInstanceTable: new ClassificationLevelApi(),
  contactsTable: new ContactsApi(),
  contractConsiderationsTable: new ContractConsiderationsApi(),
  fairOpportunityTable: new FairOpportunityApi(),
  fundingPlanTable :new FundingPlanApi(),
  currentContractTable: new CurrentContractApi(),
  sensitiveInformationTable: new SensitiveInformationApi(),
  serviceOfferingTable: new ServiceOfferingApi(),
  militaryRankTable: new MilitaryRankApi(),
  periodTable: new PeriodApi(),
  periodOfPerformanceTable: new PeriodOfPerformanceApi(),
  gfeOverviewTable: new GFEOverviewApi(),
  contractTypeTable: new ContractTypeApi(),
  requirementsCostEstimateTable: new RequirementsCostEstimateApi(),
  statesTable: new StatesApi(),
  countriesTable: new CountriesApi(),
  requiredServicesTables: new RequiredServicesApi(),
  selectedServiceOfferingTable: new SelectedServiceOfferingApi(),
  
}

export default {
  ...api
};


export const AttachmentTables = {

  FundingPlans: "fundingPlans"
}

export const AttachmentTableApiFactory = (key: string): TableApiBase<AttachableDTO>=> {
  switch(key){
  case AttachmentTables.FundingPlans:
    return api.fundingPlanTable
  default:
    throw new Error(`unable to locate api with key ${key}`);
  }
}