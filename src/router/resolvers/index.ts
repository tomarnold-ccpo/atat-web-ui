import AcquisitionPackage from "@/store/acquisitionPackage";
import OtherContractConsiderations from "@/store/otherContractConsiderations";
import { sanitizeOfferingName } from "@/helpers";
import { routeNames } from "../stepper";
import { RouteDirection, StepPathResolver, StepRouteResolver } from "@/store/steps/types";
import DescriptionOfWork, { DOWStep } from "@/store/descriptionOfWork";

export const AcorsRouteResolver = (current: string): string => {
  const hasAlternativeContactRep = AcquisitionPackage.hasAlternativeContactRep;

  //routing from alternate cor and the user does not have
  //and alternatative contact rep
  if (
    current === routeNames.AlternateCor &&
    hasAlternativeContactRep === false
  ) {
    return routeNames.Summary;
  }

  //routing from summary and user does not have
  if (current === routeNames.Summary && hasAlternativeContactRep === false) {
    return routeNames.AlternateCor;
  }

  return routeNames.AcorInformation;
};


export const CurrentContractDetailsRouteResolver = (current: string): string => {
  const hasCurrentContract 
    = AcquisitionPackage.currentContract?.current_contract_exists === "YES";
  if (hasCurrentContract) {
    return routeNames.CurrentContractDetails;
  }
  return current === routeNames.CurrentContract
    ? routeNames.PeriodOfPerformance
    : routeNames.CurrentContract;
};

export const CurrentContractEnvRouteResolver = (current: string): string => {
  const hasCurrentContract 
    = AcquisitionPackage.currentContract?.current_contract_exists === "YES";
  if (hasCurrentContract) {
    return routeNames.CurrentEnvironment;
  }
  return current === routeNames.PeriodOfPerformance
    ? routeNames.CurrentContract
    : routeNames.PeriodOfPerformance;
};

export const PIIRecordResolver = (current: string): string => {
  const hasSystemOfRecord = AcquisitionPackage.sensitiveInformation?.pii_present === "YES";
  // if system of record will be included, route to system of records page
  if (hasSystemOfRecord) {
    return routeNames.PIIRecord;
  }
  return current === routeNames.PII ? routeNames.BAA : routeNames.PII;
};

export const FOIARecordResolver = (current: string): string => {
  const needsFOIACoordinator 
    = AcquisitionPackage.sensitiveInformation?.potential_to_be_harmful === "YES";
  // if user selects "Yes" on FOIA (Public Disclosure of Information) page,
  // then need to collect information about the FOIA Coordinator
  if (needsFOIACoordinator) {
    return routeNames.FOIACoordinator;
  }
  return current === routeNames.FOIA
    ? routeNames.Section508Standards
    : routeNames.FOIA;
};
export const A11yRequirementResolver = (current: string): string => {
  const needsA11yReqs
      = AcquisitionPackage.sensitiveInformation?.section_508_sufficient === "NO";
  // if user selects "No" on Section 508 standards page,
  // then need to collect information about 508 accessibility requirements
  if (needsA11yReqs) {
    return routeNames.Section508AccessibilityRequirements;
  }
  return current === routeNames.Section508Standards
    ? routeNames.EvaluationCriteria
    : routeNames.Section508Standards;
};

export const ContractTrainingReq = (current: string): string => {
  const contractTraining
      = AcquisitionPackage.contractConsiderations?.contractor_required_training === "YES";
  if (contractTraining) {
    return routeNames.TrainingCourses;
  }
  return current === routeNames.Training
    ? routeNames.PII
    : routeNames.Training;
};

const basePerformanceRequirementsPath =  `performance-requirements`;
const descriptionOfWorkSummaryPath=  "performance-requirements/dow-summary";

const baseOfferingDetailsPath =  `${basePerformanceRequirementsPath}/service-offering-details/`;
const getServiceOfferingsDetailsPath= (groupId: string, serviceName: string)=> {
  let path = `${baseOfferingDetailsPath}${groupId.toLowerCase()}/`
  path += `${sanitizeOfferingName(serviceName)}`;
  return path;
}
  

export const getOfferingGroupServicesPath = (groupId: string): string =>
  `${basePerformanceRequirementsPath}/service-offerings/${groupId.toLowerCase()}`

export const RequirementsPathResolver = (current: string): string =>
{
  return basePerformanceRequirementsPath;
}

const resolveNextGroup = (): string => {

  if(DescriptionOfWork.currentGroupId === "Xaas_NONE"
     || DescriptionOfWork.currentGroupId === "Cloud_NONE"){
    if(DescriptionOfWork.canGetNextOfferingGroup){
      const nextGroup = DescriptionOfWork.nextOfferingGroup;
      if(nextGroup){
        DescriptionOfWork.setCurrentOfferingGroupId(nextGroup);
        return getOfferingGroupServicesPath(DescriptionOfWork.currentGroupId);
      }
    }
    else{
      return descriptionOfWorkSummaryPath;
    }
  }

  return DescriptionOfWork.currentGroupId;
   
}

export const OfferGroupOfferingsPathResolver = (current: string, 
  direction: string): string => {
  
  if(current === routeNames.RequirementCategories){
     
    if(direction.toUpperCase() === RouteDirection.NEXT){
      const path = resolveNextGroup();
      return path;
    }
  }

  return getOfferingGroupServicesPath(DescriptionOfWork.currentGroupId);
}

// add resolver here so that it can be found by invoker
const routeResolvers: Record<string, StepRouteResolver> = {
  AcorsRouteResolver,
  CurrentContractDetailsRouteResolver,
  CurrentContractEnvRouteResolver,
  PIIRecordResolver,
  FOIARecordResolver,
  A11yRequirementResolver,
  ContractTrainingReq,
};

// add path resolvers here 
const pathResolvers: Record<string, StepPathResolver> = {
  OfferGroupOfferingsPathResolver,
  RequirementsPathResolver,
}

export const InvokeRouteResolver = (
  resolverName: string,
  currentStep: string
): string => routeResolvers[resolverName](currentStep);

export const InvokePathResolver = (
  resolverName: string,
  currentStep: string,
  direction: string
): string => pathResolvers[resolverName](currentStep, direction); 