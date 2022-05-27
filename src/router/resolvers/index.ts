import AcquisitionPackage from "@/store/acquisitionPackage";
import OtherContractConsiderations from "@/store/otherContractConsiderations";

import { routeNames } from "../stepper";
import { StepRouteResolver } from "@/store/steps/types";
import DescriptionOfWork from "@/store/descriptionOfWork";
import { DOWServiceOfferingGroup } from "types/Global";

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

//route resolver, the naming convention is strict  must have suffix "RouteResolver"
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

export const PIIRecordRouteResolver = (current: string): string => {
  const hasSystemOfRecord = AcquisitionPackage.sensitiveInformation?.pii_present === "YES";
  // if system of record will be included, route to system of records page
  if (hasSystemOfRecord) {
    return routeNames.PIIRecord;
  }
  return current === routeNames.PII ? routeNames.BAA : routeNames.PII;
};

export const FOIARecordRouteResolver = (current: string): string => {
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
export const A11yRequirementRouteResolver = (current: string): string => {
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

export const ContractTrainingReqRouteResolver = (current: string): string => {
  const contractTraining
      = AcquisitionPackage.contractConsiderations?.contractor_required_training === "YES";
  if (contractTraining) {
    return routeNames.TrainingCourses;
  }
  return current === routeNames.Training
    ? routeNames.PII
    : routeNames.Training;
};

const buildPerformanceRequirementsRoute= (serviceOfferingGroupIndex: number, 
  serviceOfferingIndex: number, dow: DOWServiceOfferingGroup[])=>{

  const serviceOfferingGroup = serviceOfferingGroupIndex > -1 ? 
    dow[serviceOfferingGroupIndex] : dow[0];
    
  if(serviceOfferingIndex === -1)
  {
    return `/performance-requirements/${serviceOfferingGroup.serviceOfferingGroupId}`
  }
  else{
    const serviceOffering = serviceOfferingGroup.serviceOfferings[serviceOfferingIndex];
    const serviceOfferingName = serviceOffering.serviceOffering.length ? 
      serviceOffering.serviceOffering : serviceOffering.otherOfferingName;
    let path = `/performance-requirements/${serviceOfferingGroup.serviceOfferingGroupId}`;
    path +=`/${serviceOfferingName}`;
    return path;
  }
    
}

//Path Resolvers, the nomemclature is strict the resolver must have a suffice "PathResolver"
export const ServiceOfferingGroupPathResolver = (current: string, direction?: string): string => {
  debugger;
  
  if(current === routeNames.RequirementCategories){
    const serviceOfferingGroup = DescriptionOfWork.dowServiceOfferingGroups[0];
    const serviceOfferingGroupName =
     serviceOfferingGroup.serviceOfferingGroupId.toLocaleLowerCase();
    return `/performance-requirements/service-offering-group/${serviceOfferingGroupName}`;
  }

  const currentGroupIndex = DescriptionOfWork.currentServiceOfferingGroupIndex;
  const currentServiceOfferingIndex = DescriptionOfWork.currentServiceOfferingIndex;
  const currentServiceGroup = DescriptionOfWork.dowServiceOfferingGroups[currentGroupIndex];


  if(direction === "next"){
      
    if(currentGroupIndex === -1){
      DescriptionOfWork.setCurrentServiceOfferingGroup(0);
    }
    if(currentServiceGroup.serviceOfferings.length >= currentServiceOfferingIndex + 1){
      DescriptionOfWork.setCurrentServiceOffering(currentServiceOfferingIndex + 1);
       
      return buildPerformanceRequirementsRoute(DescriptionOfWork.currentServiceOfferingGroupIndex, 
        DescriptionOfWork.currentServiceOfferingIndex, DescriptionOfWork.dowServiceOfferingGroups);
    }
    else{

      if(DescriptionOfWork.dowServiceOfferingGroups.length >= currentGroupIndex + 1)
      {
        DescriptionOfWork.setCurrentServiceOfferingGroup(currentGroupIndex + 1);
        return buildPerformanceRequirementsRoute(DescriptionOfWork
          .currentServiceOfferingGroupIndex, 
        DescriptionOfWork.currentServiceOfferingIndex, 
        DescriptionOfWork.dowServiceOfferingGroups);
      }
      else{

        return "summary page";
      }
    }
  }
  else{

    if(currentGroupIndex > -1){
      DescriptionOfWork.setCurrentServiceOfferingGroup(currentGroupIndex -1);
      DescriptionOfWork.setCurrentServiceOffering(0);
      return buildPerformanceRequirementsRoute(DescriptionOfWork.currentServiceOfferingGroupIndex, 
        DescriptionOfWork.currentServiceOfferingIndex, DescriptionOfWork.dowServiceOfferingGroups);
    }
      
  }

  throw new Error("something went wrong");    
}

// add resolver here so that it can be found by invoker
const resolvers: Record<string, StepRouteResolver> = {
  AcorsRouteResolver,
  CurrentContractDetailsRouteResolver,
  CurrentContractEnvRouteResolver,
  PIIRecordRouteResolver,
  FOIARecordRouteResolver,
  A11yRequirementRouteResolver,
  ContractTrainingReq: ContractTrainingReqRouteResolver,
  ServiceOfferingGroupPathResolver,

};

export const InvokeResolver = (
  resolverName: string,
  currentStep: string,
  direction?: string,
): string => resolvers[resolverName](currentStep, direction);
