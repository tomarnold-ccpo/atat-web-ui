import AcquisitionPackage from "@/store/acquisitionPackage";
import OtherContractConsiderations from "@/store/otherContractConsiderations";
import { sanitizeOfferingName } from "@/helpers";
import { routeNames } from "../stepper";
import { RouteDirection, StepPathResolver, StepRouteResolver } from "@/store/steps/types";
import DescriptionOfWork from "@/store/descriptionOfWork";

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



const xaaSNoneValue = "XaaS_NONE";
const cloudNoneValue = "Cloud_NONE";

const basePerformanceRequirementsPath =  `performance-requirements`;
const descriptionOfWorkSummaryPath=  "performance-requirements/dow-summary";

const baseOfferingDetailsPath =  `${basePerformanceRequirementsPath}/service-offering-details/`;
const getServiceOfferingsDetailsPath= (groupId: string, serviceName: string)=> {
  let path = `${baseOfferingDetailsPath}${groupId.toLowerCase()}/`
  path += `${sanitizeOfferingName(serviceName)}`;
  return path;
}
  

export const getOfferingGroupServicesPath = (groupId: string)=>
  `${basePerformanceRequirementsPath}/service-offerings/${groupId.toLowerCase()}`;

const displayPreviousServiceOffering = ()=> {

  const groupId = DescriptionOfWork.currentGroupId;
  const serviceOfferingError = new Error('unable to get previous service offering');

  const serviceOffering = DescriptionOfWork.previousServiceOffering;

  if(serviceOffering === undefined)
  {
    throw serviceOfferingError;
  }

  DescriptionOfWork.setCurrentOffering(serviceOffering);
  return getServiceOfferingsDetailsPath(groupId, serviceOffering);
}

const getPreviousofferingGroup = ()=> {
  
  const previousGroup = DescriptionOfWork.prevOfferingGroup;
  if(previousGroup === undefined)
  {
    throw new Error('unable to get previous group');
  }
  return previousGroup;
}

export const RequirementsPathResolver = (current: string, direction: string): string =>
{

  return basePerformanceRequirementsPath;
}

export const OfferGroupOfferingsPathResolver = (current: string, direction: string): string => {

  if(current === routeNames.RequirementCategories)
  {
   
    if(DescriptionOfWork.noCategoriesSelected)
    {
    //we go straight to the summary for now... 
    //this might change slightly in the future...
      return descriptionOfWorkSummaryPath;
    }

    if(DescriptionOfWork.isNoneSelected && DescriptionOfWork.isEndOfServiceGroups)
      return descriptionOfWorkSummaryPath;
  }
  // else 
  // {
  //   const currentGroup = DescriptionOfWork.nextOfferingGroup;
  //   if(currentGroup){
  //     DescriptionOfWork.setCurrentOfferingGroupId(currentGroup);
  //   }
  // }


  if(current === routeNames.DOWSummary){
    debugger;

    if(!DescriptionOfWork.currentGroupHasSelections || 
      (DescriptionOfWork.isNoneSelected))
    {
      //try to get previous group
      if(DescriptionOfWork.canGetPreviousOfferingGroup){
        const currentGroup = DescriptionOfWork.nextOfferingGroup;
        if(currentGroup){
          DescriptionOfWork.setCurrentOfferingGroupId(currentGroup);
        }
      }
      else{
        return basePerformanceRequirementsPath;
      }
    }
  }

 
  //default  
  return getOfferingGroupServicesPath(DescriptionOfWork.currentGroupId);
}

export const OfferingDetailsPathResolver =(current: string, direction: string): string => {

  const currentGroupHasSelections = DescriptionOfWork.currentGroupHasSelections;
  const atBeginningOfOfferingGroups = DescriptionOfWork.isAtBeginningOfServiceGroups;
  
  if(current === routeNames.ServiceOfferings){
    if(!currentGroupHasSelections){
      //try to get next group
      const nextGroup = DescriptionOfWork.nextOfferingGroup as string;
      if(nextGroup && !(nextGroup === xaaSNoneValue || nextGroup == cloudNoneValue))
        DescriptionOfWork.setCurrentOfferingGroupId(nextGroup);
      return OfferGroupOfferingsPathResolver(current, direction);
    }
    else{
          
      return descriptionOfWorkSummaryPath;
    }
  }

  if(current === routeNames.DOWSummary){
    
    if(!DescriptionOfWork.currentGroupHasSelections){
      return OfferGroupOfferingsPathResolver(current, direction);
    }
  }

  const groupId = DescriptionOfWork.currentGroupId
  const offering = sanitizeOfferingName(DescriptionOfWork.currentOfferingName);
  return `${baseOfferingDetailsPath}${groupId.toLowerCase()}/${offering.toLowerCase()}`;
 
 
}

export const DowSummaryPathResolver = (current: string, direction: string): string =>{
  
  // coming from service offering details step
  if(current === routeNames.ServiceOfferingDetails){
    const atServicesEnd = DescriptionOfWork.isEndOfServiceOfferings;
    const atOfferingsEnd = DescriptionOfWork.isEndOfServiceGroups;

    //no more offerings or services to process go to summary
    if(atOfferingsEnd && atServicesEnd){
      return descriptionOfWorkSummaryPath;
    }

    //there's more services to process
    if(atOfferingsEnd && !atServicesEnd){
      const nextServiceOffering = DescriptionOfWork.nextServiceOffering;
      if(nextServiceOffering === undefined)
      {
        throw new Error('unable to retreive next service offering');
      }

      DescriptionOfWork.setCurrentOffering(nextServiceOffering);
      return OfferingDetailsPathResolver(current, direction);
    }

    if(!atOfferingsEnd && !atServicesEnd){
      //not at the end of offering groups yet
      //get the next one and forward to the OfferGroupOfferings path
      //resolver 
      const nextServiceOffering = DescriptionOfWork.nextServiceOffering;
      if(nextServiceOffering === undefined)
      {
        throw new Error('unable to retreive next service offering');
      }

      DescriptionOfWork.setCurrentOffering(nextServiceOffering);
      return OfferingDetailsPathResolver(current, direction);
    }

    if(!atOfferingsEnd && atServicesEnd){
      //not at the end of offering groups yet
      //get the next one and forward to the OfferGroupOfferings path
      //resolver 
      const nextOfferingGroup = DescriptionOfWork.nextOfferingGroup;
      if(nextOfferingGroup === undefined)
      {
        throw new Error('unable to retrive next offering group');
      }
      DescriptionOfWork.setCurrentOfferingGroupId(nextOfferingGroup);
      return OfferGroupOfferingsPathResolver(current , direction);
    }

    //should never get here
    return OfferingDetailsPathResolver(current, direction);


  }
  else{
    return OfferingDetailsPathResolver(current, direction);
  }
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
  OfferingDetailsPathResolver,
  DowSummaryPathResolver,
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