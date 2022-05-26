import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule,
} from "vuex-module-decorators";
import rootStore from "../index";
import api from "@/api";
import { ClassificationLevelDTO, ServiceOfferingDTO, SystemChoiceDTO } from "@/api/models";
import {TABLENAME as ServiceOfferingTableName } from "@/api/serviceOffering"
import {
  nameofProperty,
  storeDataToSession,
  retrieveSession,
} from "../helpers";
import Vue from "vue";
import { DOWServiceOfferingGroup, stringObj } from "../../../types/Global";
import { routeNames } from "@/router/stepper";


const ATAT_DESCRIPTION_OF_WORK_KEY = "ATAT_DESCRIPTION_OF_WORK_KEY";

@Module({
  name: "DescriptionOfWork",
  namespaced: true,
  dynamic: true,
  store: rootStore,
})
export class DescriptionOfWorkStore extends VuexModule {
  classificationLevels: ClassificationLevelDTO[] = [];
  initialized = false;
  serviceOfferings: ServiceOfferingDTO[] = [];
  serviceOfferingGroups: SystemChoiceDTO[] = [];
  selectedOfferingGroups: stringObj[] = [];
  dowServiceOfferingGroups: DOWServiceOfferingGroup[] = [];
  currentServiceOfferingGroup = "";
  currentServiceOffering=""; 
  //Todo: add the other needed props
  //serviceOfferingsToDelete


  // store session properties
  protected sessionProperties: string[] = [
    nameofProperty(this, (x) => x.classificationLevels),
    nameofProperty(this, (x) => x.serviceOfferings),
    nameofProperty(this, (x) => x.serviceOfferingGroups),
  ];

  @Mutation
  private setClassifications(value: ClassificationLevelDTO[]) {
    this.classificationLevels = value;
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
    this.serviceOfferingGroups = value;
  }

  @Mutation
  public setSelectedOfferingGroups(selectedOfferingGroups: string[]): void {
    this.selectedOfferingGroups = []; 
    selectedOfferingGroups.forEach((selectedOfferingGroup) => {

      //do we need this still
      if (!this.selectedOfferingGroups.some(e => e.category === selectedOfferingGroup)) {
        const offering = {
          category: selectedOfferingGroup
        }
        this.selectedOfferingGroups.push(offering);
      }

      // todo add logic to filter out the removed/deleted service offering group selections
      if(!this.dowServiceOfferingGroups
        .some(g=> g.serviceOfferingGroupId === selectedOfferingGroup)){
        this.dowServiceOfferingGroups.push({
          serviceOfferingGroupId: selectedOfferingGroup,
          serviceOfferings: [],
        })
      }
    });
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

@Mutation
  public setCurrentServiceOfferingGroup(value: string): void {
    this.currentServiceOfferingGroup = value;
  }

  
@Mutation
public setCurrentServiceOffering(value: string): void {
  this.currentServiceOffering = value;
}

  @Action({ rawError: true })
async ensureInitialized(): Promise<void> {
  if (!this.initialized) {
    await this.initialize();
  }
}

  @Action({ rawError: true })
  public async getClassificationLevels(): Promise<ClassificationLevelDTO[]> {
    await this.ensureInitialized();
    return this.classificationLevels;
  }

  @Action({ rawError: true })
  public async getServiceOfferingGroups(): Promise<SystemChoiceDTO[]> {
    await this.ensureInitialized();
    return this.serviceOfferingGroups;
  }

  @Action({ rawError: true })
  public async getSelectedServiceOfferingGroups(): Promise<stringObj[]> {
    await this.ensureInitialized();
    return this.selectedOfferingGroups;
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
          this.loadClassificationLevels(),
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
  public async loadClassificationLevels(): Promise<void> {
    try {
      const classificationLevels = await api.classificationLevelTable.all();
      this.setClassifications(classificationLevels);
    } catch (error) {
      throw new Error(`error loading Classification Levels ${error}`);
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
  public async saveServiceOfferingGroupSelections(serviceOfferingGroups: 
    SystemChoiceDTO[]):Promise<void> {
    serviceOfferingGroups.forEach(group => {
      const existingIndx = this.dowServiceOfferingGroups
        .findIndex(dowGroup=>dowGroup.serviceOfferingGroupId === group.label);
      if(existingIndx < 0){
                
        this.dowServiceOfferingGroups.push({
          serviceOfferingGroupId: group.label,
          serviceOfferings: [],
        })
      }
    });

    //todo: add in logic to filter out removed service offering selections
        
  }

  @Action({rawError: true})
  public async resolveNextServiceOfferingGroup():Promise<string> {

    if(this.currentServiceOffering.length > 0){

      const serviceOfferingGroup = this.dowServiceOfferingGroups
        .find(group=>group.serviceOfferingGroupId === this.currentServiceOfferingGroup);
        
      if(this.currentServiceOffering.length > 0){

        const currentServiceOfferingIndex = serviceOfferingGroup ? serviceOfferingGroup.serviceOfferings
          .findIndex(offering=> offering.otherOfferingName === this.currentServiceOffering): -1 ;  
        //todo: account for "other";
        if(currentServiceOfferingIndex > -1)
        {
           if(serviceOfferingGroup && serviceOfferingGroup?.serviceOfferings.length 
            > (currentServiceOfferingIndex + 1))
           {
               this.setCurrentServiceOffering
               (serviceOfferingGroup.serviceOfferings[currentServiceOfferingIndex + 1].serviceOffering);

               return routeNames.SelectServiceOfferings
           }
        }
              
                 
        }
      }
    }
    else{
      const firstServiceOfferingGroup = this.dowServiceOfferingGroups.length > 0 
        ? this.dowServiceOfferingGroups[0] : "";

      if(firstServiceOfferingGroup)
      {
        this.setCurrentServiceOfferingGroup(firstServiceOfferingGroup.serviceOfferingGroupId)
      }
    }
  }
}

const DescriptionOfWork = getModule(DescriptionOfWorkStore);
export default DescriptionOfWork;
