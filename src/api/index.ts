import { AcquisitionPackagesApi } from "./acquisitionPackages";
import { ProjectOverviewApi } from "./projectOverview";
import { OrganizationApi } from "./organization";
import { ContactsApi } from "./contacts";
import { FairOpportunityApi } from "./fairOpportunity";
import { CurrentContractApi } from "./background";
import { SensitiveInformationApi } from "./otherContractConsiderations";
import { MilitaryRankApi } from "./militaryRanks";
import { SystemChoicesApi } from "./systemChoices";
import { ContractTypeApi, PeriodOfPerformanceApi } from "./contractDetails";
import { GFEOverviewApi } from "./GFEOverview";
import { RequirementsCostEstimateApi } from "./requriementsCostEstimate";
import {StatesApi} from "./states";
import {CountriesApi} from "./countries";

export default {
  systemChoices: new SystemChoicesApi(),
  acquisitionPackageTable: new AcquisitionPackagesApi(),
  projectOverviewTable: new ProjectOverviewApi(),
  organizationTable: new OrganizationApi(),
  contactsTable: new ContactsApi(),
  fairOpportunityTable: new FairOpportunityApi(),
  currentContractTable: new CurrentContractApi(),
  sensitiveInformationTable: new SensitiveInformationApi(),
  militaryRankTable: new MilitaryRankApi(),
  periodOfPerformanceTable: new PeriodOfPerformanceApi(),
  gfeOverviewTable: new GFEOverviewApi(),
  contractTypeTable: new ContractTypeApi(),
  requirementsCostEstimateTable: new RequirementsCostEstimateApi(),
  statesTable: new StatesApi(),
  countriesTable: new CountriesApi(),
};
