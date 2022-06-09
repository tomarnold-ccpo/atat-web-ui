/* eslint-disable camelcase */
import api from "@/api";
import {
  ClassificationInstanceDTO, ClassificationLevelDTO,
  SelectedServiceOfferingDTO, ServiceOfferingDTO, SystemChoiceDTO
} from "@/api/models";
import { TABLENAME as ServiceOfferingTableName } from "@/api/serviceOffering";
import _, { last, difference, differenceWith } from "lodash";
import Vue from "vue";
import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule
} from "vuex-module-decorators";
import {
  DOWClassificationInstance, DOWServiceOffering, DOWServiceOfferingGroup
} from "../../../types/Global";
import {
  nameofProperty, retrieveSession, storeDataToSession
} from "../helpers";
import rootStore from "../index";



const ATAT_DESCRIPTION_OF_WORK_KEY = "ATAT_DESCRIPTION_OF_WORK_KEY";

type ServiceOfferingProxy =  {
    serviceOffering: SelectedServiceOfferingDTO,
    classificationInstances: ClassificationInstanceDTO[]
}

const getServiceofferingById = (sysId: string, serviceOfferings: ServiceOfferingDTO[]): 
ServiceOfferingDTO | undefined => {
  return serviceOfferings.find(offering=> offering.sys_id === sysId);
}

const getClassificationLevelsById = (sysId: string,  
  classificationLevels: ClassificationLevelDTO[]): 
ClassificationLevelDTO | undefined => {
  return classificationLevels.find(classificationLevel=> classificationLevel.sys_id === sysId);  
}



const mapDOWServiceOfferingToSelectedService= 
(dowServiceOffering: DOWServiceOffering): ServiceOfferingProxy=> {
      
  const serviceOffering: SelectedServiceOfferingDTO = {
    service_offering : dowServiceOffering.sysId || "",
    classification_instances: "",
    other_service_offering: dowServiceOffering.otherOfferingName || "",
  };

  const classificationInstances = dowServiceOffering.classificationInstances?.map(instance=> {

    const classificationInstance: ClassificationInstanceDTO = {

      selected_periods: instance.selectedPeriods?.map(period=> period.sysId || "").join(',') || "",
      classification_level: instance.classificationLevelSysId,
      usage_description: instance.anticipatedNeedUsage,
      need_for_entire_task_order_duration: instance.entireDuration
    }
    return classificationInstance;
  }) || [];

  return {
    serviceOffering,
    classificationInstances
  }

}


@Module({
  name: "DescriptionOfWork",
  namespaced: true,
  dynamic: true,
  store: rootStore,
})
export class DescriptionOfWorkStore extends VuexModule {
  initialized = false;
  serviceOfferings: ServiceOfferingDTO[] = [];
  serviceOfferingGroups: SystemChoiceDTO[] = [];

  // selectedOfferingGroups: stringObj[] = [];
  DOWObject: DOWServiceOfferingGroup[] = [];

  //list of required services -- this is synchronized to back end
  userSelectedServiceOfferings: SelectedServiceOfferingDTO[] = [];

  currentGroupId = "";
  currentOfferingName = "";
  currentOfferingSysId = "";

  // store session properties
  protected sessionProperties: string[] = [
    nameofProperty(this, (x) => x.serviceOfferings),
    nameofProperty(this, (x) => x.serviceOfferingGroups),
  ];

  
  // getters
  public get currentOfferingGroupIndex(): number {
    return this.DOWObject
      .findIndex(group=>group.serviceOfferingGroupId === this.currentGroupId);
  }

  public get currentOfferingIndex(): number {

    const groupIndex = this.currentOfferingGroupIndex;
    const offeringIndex = groupIndex > -1 ? this.DOWObject[groupIndex]
      .serviceOfferings.findIndex(offering=> offering.name 
        === this.currentOfferingName): groupIndex;
    return offeringIndex;
  }

  public get serviceOfferingsForGroup(): DOWServiceOffering[] {
    const groupIndex = this.currentOfferingGroupIndex;
    return groupIndex > -1 ? this.DOWObject[groupIndex].serviceOfferings : [];
  }

  public get isEndOfServiceOfferings(): boolean {
    
    const offerings =  this.serviceOfferingsForGroup;
    const currentOfferingIndex = offerings
      .findIndex(offering=> offering.name === this.currentOfferingName);
    return (currentOfferingIndex + 1) === offerings.length;
  }

  public get isEndOfServiceGroups(): boolean {
    const groupIndex = this.DOWObject
      .findIndex(group=> group.serviceOfferingGroupId === this.currentGroupId);
    return (groupIndex + 1) === this.DOWObject.length;
  }

  public get isAtBeginningOfServiceOfferings(): boolean {
    const offerings =  this.serviceOfferingsForGroup;
    const currentOfferingIndex = offerings
      .findIndex(offering=> offering.name === this.currentOfferingName);
    return currentOfferingIndex == 0; 
  }

  public get isAtBeginningOfServiceGroups(): boolean {
    const groupIndex = this.DOWObject
      .findIndex(group=> group.serviceOfferingGroupId === this.currentGroupId);
    return groupIndex === 0;

  }

  public get nextServiceOffering(): { name: string, sysId: string} | undefined {
 
    const serviceOfferings = this.serviceOfferingsForGroup;

    if(!serviceOfferings.length)
    {
      return undefined;
    }

    const currentServiceIndex = serviceOfferings
      .findIndex(offering=>offering.name === this.currentOfferingName);

    if(currentServiceIndex < 0)
    {
      throw new Error(`unable to get index for current offer ${this.currentOfferingName}`);
    }

    if((currentServiceIndex + 2) <= serviceOfferings.length )
    {
      const nextOffering = serviceOfferings[currentServiceIndex + 1];
      return { name: nextOffering.name, sysId: nextOffering.sysId || "" }
    }

    return undefined;
  }

  public get previousServiceOffering(): { name: string, sysId: string } | undefined {

    const serviceOfferings = this.serviceOfferingsForGroup;

    if(!serviceOfferings.length)
    {
      return undefined;
    }

    const currentServiceIndex = serviceOfferings
      .findIndex(offering=>offering.name === this.currentOfferingName);

    if(currentServiceIndex < 0)
    {
      throw new Error(`unable to get index for current offer ${this.currentOfferingName}`);
    }

    if(currentServiceIndex > -1 )
    {
      const serviceIndex = currentServiceIndex > 0 ? currentServiceIndex - 1: currentServiceIndex;
      const nextOffering = serviceOfferings[serviceIndex];
      return { name: nextOffering.name, sysId: nextOffering.sysId || "" }
    }

    return undefined;
  }

  public get nextOfferingGroup(): string | undefined {

    

    const currentGroupIndex = this.DOWObject
      .findIndex(group=> group.serviceOfferingGroupId === this.currentGroupId);

    if(currentGroupIndex < 0){
      return undefined;
    }

    if((currentGroupIndex + 2) <= this.DOWObject.length){
      const nextGroup = this.DOWObject[currentGroupIndex + 1].serviceOfferingGroupId;
      return nextGroup;
    }

    return undefined;
  }

  public get prevOfferingGroup(): string | undefined {

    const currentGroupIndex = this.DOWObject
      .findIndex(group=> group.serviceOfferingGroupId === this.currentGroupId);

    if(currentGroupIndex < 0){
      return undefined;
    }
  
    const groupIndex = currentGroupIndex > 0 ? currentGroupIndex - 1 :  currentGroupIndex;
    const nextGroup = this.DOWObject[groupIndex].serviceOfferingGroupId;
    return nextGroup;
  }

  public get lastOfferingForGroup(): { name: string, sysId: string } | undefined {

    const currentGroupIndex = this.DOWObject
      .findIndex(group=> group.serviceOfferingGroupId === this.currentGroupId);

    if(currentGroupIndex < 0){
      return undefined;
    }
  
    const lastOffering =  last(this.DOWObject[currentGroupIndex].serviceOfferings);

    return lastOffering 
      ? { name: lastOffering.name, sysId: lastOffering.sysId || "" } 
      : undefined;
  }

  public get canGetPreviousServiceOffering(): boolean {

    const currentOfferingIndex = this.currentOfferingIndex;

    return currentOfferingIndex >=0;
    
  }

  public get selectedServiceOfferingGroups(): string[] {
    return this.DOWObject.map(group=> group.serviceOfferingGroupId);
  }

  public get selectedServiceOfferings(): string[] {
    return this.DOWObject.map(group=>
      group.serviceOfferings.flatMap(offering=>offering.name)).flat();
  }

  @Mutation
  private setInitialized(value: boolean) {
    this.initialized = value;
  }

  @Mutation
  private setServiceOfferings(value: ServiceOfferingDTO[]) {
    this.serviceOfferings = value;
  }

  @Mutation
  private setServiceOfferingGroups(value: SystemChoiceDTO[]) {
    value.forEach((value, index) => {
      value.sequence = index;
    });
    this.serviceOfferingGroups = value;
  }

  @Mutation
  public setSelectedOfferingGroups(selectedOfferingGroups: string[]): void {
    selectedOfferingGroups.forEach((selectedOfferingGroup) => {
      if (!this.DOWObject.some(e => e.serviceOfferingGroupId === selectedOfferingGroup)) {
        const group = this.serviceOfferingGroups.find(e => e.value === selectedOfferingGroup)
        const offeringGroup: DOWServiceOfferingGroup = {
          serviceOfferingGroupId: selectedOfferingGroup,
          sequence: group?.sequence || 0,
          serviceOfferings: [],
        }
        this.DOWObject.push(offeringGroup);
      }
      // remove any groups that were previously checked
      this.DOWObject.forEach((offeringGroup, index) => {
        const groupId = offeringGroup.serviceOfferingGroupId;
        if (!selectedOfferingGroups.includes(groupId)) {
          this.DOWObject.splice(index, 1);
          // todo future ticket - remove from SNOW db
        }
      });

      this.DOWObject.sort((a, b) => a.sequence > b.sequence ? 1 : -1);

      this.currentGroupId = this.DOWObject.length > 0 ? 
        this.DOWObject[0].serviceOfferingGroupId : "";
      this.currentOfferingName = "";
      this.currentOfferingSysId = "";
    });
  }

  @Mutation
  public async setSelectedOfferings(selectedOfferingSysIds: string[]): Promise<void> {
    const groupIndex 
      = this.DOWObject.findIndex((obj) => obj.serviceOfferingGroupId === this.currentGroupId);
    if (groupIndex >= 0) {
      const currentOfferings = this.DOWObject[groupIndex].serviceOfferings;
      // add selectedOfferings to DOWObject
      selectedOfferingSysIds.forEach((selectedOfferingSysId) => {
        if (!currentOfferings.some((e) => e.sysId === selectedOfferingSysId)) {
          const foundOffering 
            = this.serviceOfferings.find((e) => e.sys_id === selectedOfferingSysId);
          if (foundOffering) {
            const offering = {
              name: foundOffering.name,
              "sys_id": selectedOfferingSysId,
              classificationInstances: [],
              description: foundOffering.description,
              sequence: foundOffering.sequence,
              selectedOfferingSysId : "",
            }
            currentOfferings.push(offering);
            // todo future ticket - add to SNOW db
          }
        }
      });
      
      // remove any service offerings previously selected but unchecked this pass
      const currentOfferingsClone = _.cloneDeep(currentOfferings);
      // const currentOfferingsClone = JSON.parse(JSON.stringify(currentOfferings));
      currentOfferingsClone.forEach((offering) => {
        const sysId = offering.sysId || "";
        if (!selectedOfferingSysIds.includes(sysId)) {
          const i = currentOfferings.findIndex(e => e.sysId === sysId);
          currentOfferings.splice(i, 1);
          // todo future ticket - remove from SNOW db
        }
      });

      this.DOWObject[groupIndex].serviceOfferings.sort(
        (a, b) => parseInt(a.sequence) > parseInt(b.sequence) ? 1 : -1
      );

      this.currentOfferingName = currentOfferings.length > 0
        ? currentOfferings[0].name : "";
      this.currentOfferingSysId = currentOfferings.length > 0 
        ? currentOfferings[0].sysId || "" : ""
    }
  }

  @Mutation
  public async setOfferingDetails(instancesData: DOWClassificationInstance[]): Promise<void> {
    const groupIndex = this.DOWObject.findIndex(
      obj => obj.serviceOfferingGroupId === this.currentGroupId
    );
    const offeringIndex = this.DOWObject[groupIndex].serviceOfferings.findIndex(
      obj => obj.sysId === this.currentOfferingSysId
    );
    this.DOWObject[groupIndex].serviceOfferings[offeringIndex].classificationInstances
      = instancesData;
  }

  @Mutation
  public setCurrentOffering(value: { name: string, sysId: string }): void {
    this.currentOfferingName = value.name;
    this.currentOfferingSysId = value.sysId;
  }

  @Mutation
  public setCurrentOfferingGroupId(value: string): void {
    this.currentGroupId = value;
  }

  @Mutation
  public setCurrentUserSelectedServices(value: SelectedServiceOfferingDTO[]): void{
    this.userSelectedServiceOfferings = value;
  }


  @Action({ rawError: true })
  public async getClassificationInstances(): Promise<DOWClassificationInstance[]> {
    const currentGroup 
      = this.DOWObject.find((obj) => obj.serviceOfferingGroupId === this.currentGroupId);
    const currentOffering
      = currentGroup?.serviceOfferings.find((obj) => obj.name === this.currentOfferingName);
    if (currentOffering && currentOffering.classificationInstances) {
      return currentOffering.classificationInstances;
    }
    return [];
  }


  @Mutation
  public setStoreData(sessionData: string): void {
    try {
      const sessionDataObject = JSON.parse(sessionData);
      Object.keys(sessionDataObject).forEach((property) => {
        Vue.set(this, property, sessionDataObject[property]);
      });
    } catch (error) {
      throw new Error("error restoring session for contact data store");
    }
  }

  @Action({ rawError: true })
  public async getServiceOfferingGroups(): Promise<SystemChoiceDTO[]> {
    await this.ensureInitialized();
    return this.serviceOfferingGroups;
  }

  @Action({ rawError: true })
  public async getServiceOfferings(): Promise<DOWServiceOffering[]> {
    await this.ensureInitialized();
    const serviceOfferingsForGroup = this.serviceOfferings.filter((obj) => {
      return obj.service_offering_group === this.currentGroupId;
    })
    const serviceOfferings: DOWServiceOffering[] = [];
    serviceOfferingsForGroup.forEach((obj) => {
      const offering: DOWServiceOffering = {
        name: obj.name,
        sysId: obj.sys_id|| "",
        sequence: obj.sequence,
        description: obj.description,
        selectedOfferingSysId:"",
      };
      serviceOfferings.push(offering);
    })
    serviceOfferings.sort((a, b) => a.sequence > b.sequence ? 1 : -1);
    return serviceOfferings;
  }

  @Action({ rawError: true })
  public getOfferingGroupName(): string {
    const currentGroup = this.serviceOfferingGroups.find((obj) => {
      return obj.value === this.currentGroupId;
    });
    return currentGroup?.label || "";
  }

  @Action({ rawError: true })
  public getServiceOfferingName(): string {
    return this.currentOfferingName;
  }
  
  @Action({ rawError: true })
  async ensureInitialized(): Promise<void> {
    if (!this.initialized) {
      await this.initialize();
    }
  }

  @Action({ rawError: true })
  public async initialize(): Promise<void> {
    if (this.initialized) {
      const sessionRestored = retrieveSession(ATAT_DESCRIPTION_OF_WORK_KEY);
      if (sessionRestored) {
        this.setStoreData(sessionRestored);
      }
    } else {
      try {
        await Promise.all([
          this.loadServiceOfferings(),
          this.LoadServiceOfferingGroups(),
        ]);
        this.setInitialized(true);
        storeDataToSession(
          this,
          this.sessionProperties,
          ATAT_DESCRIPTION_OF_WORK_KEY
        );
      } catch (error) {
        console.error(error);
      }
    }
  }

  @Action({ rawError: true })
  public async loadServiceOfferings(): Promise<void> {
    try {
      const serviceOfferings = await api.serviceOfferingTable.all();
      this.setServiceOfferings(serviceOfferings);
    } catch (error) {
      throw new Error(`error loading Service Offerings ${error}`);
    }
  }

  @Action({rawError: true})
  public async LoadServiceOfferingGroups(): Promise<void> {
    try {
      const serviceOfferingGroups = await api.systemChoices
        .getChoices(ServiceOfferingTableName, "service_offering_group");
      this.setServiceOfferingGroups(serviceOfferingGroups);  
    } catch (error) {
      throw new Error(`error loading Service Offering Groups ${error}`);
    }
  }

  @Action({rawError: true})
  public async saveSelectedServiceOffering(data: 
    SelectedServiceOfferingDTO):Promise<SelectedServiceOfferingDTO>{
    const sysId = data.sys_id || undefined;
    const savedSelectedServiceOffering = sysId ? 
      api.selectedServiceOfferingTable.update(sysId, data) : 
      api.selectedServiceOfferingTable.create(data);

    // if(data.classification_instances){

       
    // }

    return savedSelectedServiceOffering;
  }



  @Action({rawError: true})
  public async saveClassificationInstance(data: 
    ClassificationInstanceDTO):Promise<ClassificationInstanceDTO>{
    const sysId = data.sys_id || undefined;
    const savedClassificationInstance = sysId ? 
      api.classificationInstanceTable.update(sysId, data) : 
      api.classificationInstanceTable.create(data);
    return savedClassificationInstance;
  }

  public async saveclassificationInstances(data: ClassificationInstanceDTO[]):
   Promise<ClassificationInstanceDTO[]>{
 
    try {
       
      //create a save call for each classification instance
      const calls = data.map(instance=> this.saveClassificationInstance(instance));
      const savedInstances = await Promise.all(calls);
      return savedInstances;
       
    } catch (error) {
      throw new Error(`error saving classification instances ${error}`);
       
    }
    
  }

  public async removeClassificationInstances(classificationInstances:
     string[]): Promise<boolean>{

    
    try {
      const calls = classificationInstances
        .map(instanceId=> api.classificationInstanceTable.remove(instanceId));
      await Promise.all(calls);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  public async removeUserSelectedService(service: SelectedServiceOfferingDTO): Promise<boolean>{
    let deletedService = true;
    try {
         
      await api.selectedServiceOfferingTable.remove(service.sys_id || "");
      
      const classificationInstances = service.classification_instances.split(',');

      if(classificationInstances.length)
      {
        const deletedClassificationInstances = 
      await this.removeClassificationInstances(classificationInstances);
        deletedService =deletedClassificationInstances;
      }
      return deletedService;
    } catch (error) {
      return false;
    }
  }

  public async removeUserSelectedServices(requiredServices: SelectedServiceOfferingDTO[])
  : Promise<boolean>{
    try {

      const calls = requiredServices.reduce<Promise<boolean>[]>((previous, current)=>  {
        const values = [...previous];

        if(current.sys_id){
          values.push(this.removeUserSelectedService(current));
        }
        return values;

      }, []);
      const results = await Promise.all(calls);
      return results.every(remove=>remove);
        
    } catch (error) {
      console.error(`error occurred removing required services`);
      return false;
    }
  }


  // public async saveServiceOfferingProxyData(serviceOfferingProxy: ServiceOfferingProxy): 
  // Promise<SelectedServiceOfferingDTO>{

  //    //save classification instances 
     

  // }

  //synchronizes back end with DOW
  public async saveUserSelectedServices(requiredServices: SelectedServiceOfferingDTO[], 
    dowOfferingGroups: DOWServiceOfferingGroup[]): Promise<SelectedServiceOfferingDTO[]>{

    try {
      //grab all of the selected services in the dow object
      const selectedServiceOfferings = dowOfferingGroups.map(group=>
        group.serviceOfferings.flatMap(offering=>offering)).flat();
                  
      //find everything that isn't saved
      const unsavedOfferings = selectedServiceOfferings
        .filter(offering=> !offering.selectedOfferingSysId.length)
        .map(offering=> mapDOWServiceOfferingToSelectedService(offering));

      const savedOfferings =  selectedServiceOfferings
        .filter(offering=> offering.selectedOfferingSysId.length)
        .map(offering=>mapDOWServiceOfferingToSelectedService(offering));
  
      //get services to delete - delete all of the service offerings
      //that are no longer in the dow object
      const servicesToDelete = differenceWith<SelectedServiceOfferingDTO, ServiceOfferingProxy>
      // eslint-disable-next-line camelcase
      (requiredServices, savedOfferings,
        // eslint-disable-next-line camelcase
        ({sys_id}, {serviceOffering})=> sys_id === serviceOffering.service_offering);
  
      //delete the removed services
      const deleted = await this.removeUserSelectedServices(servicesToDelete);
  
      if(!deleted)
      {
        throw new Error("error occurred removing obselete services");       
      }
  
      //save selections
      const saveCalls = servicesToDelete.map(service=> {

        const serviceTable = api.selectedServiceOfferingTable;
        return  service.sys_id ? serviceTable.update(service.sys_id, service) :
          serviceTable.create(service);
      });

      const savedServices = await Promise.all(saveCalls);

      //map saved services back to dow object

      return savedServices;
       
    } catch (error) {
      throw new Error(`error saving required service offerings ${error}`);
       
    }
  }

  @Action({rawError: true})
  public async persistDOWToServiceNow(): Promise<void>{

    const savedServices = await this
      .saveUserSelectedServices(this.userSelectedServiceOfferings, 
        this.DOWObject);
     
    this.setCurrentUserSelectedServices(savedServices);

    //update selected services in acquisition packages


  }

  @Action({rawError: true})
  public async loadSelectedServiceOffering(id: string): Promise<SelectedServiceOfferingDTO> {
    return api.selectedServiceOfferingTable.retrieve(id);
  }

  @Action({rawError: true})
  public async loadClassificationInstance(id: string): Promise<ClassificationInstanceDTO> {
    return api.classificationInstanceTable.retrieve(id);
  }

}

const DescriptionOfWork = getModule(DescriptionOfWorkStore);
export default DescriptionOfWork;
