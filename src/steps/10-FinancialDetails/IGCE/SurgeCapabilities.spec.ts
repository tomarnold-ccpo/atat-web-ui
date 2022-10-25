/* eslint-disable camelcase */
import Vue from "vue";
import Vuetify from "vuetify";
import { createLocalVue, mount, Wrapper } from "@vue/test-utils";
import { DefaultProps } from "vue/types/options";
import SurgeCapabilities from "@/steps/10-FinancialDetails/IGCE/SurgeCapabilities.vue";
import validators from "@/plugins/validation"
import AcquisitionPackage from "@/store/acquisitionPackage";
import IGCEStore  from "@/store/IGCE";
Vue.use(Vuetify);

describe("Testing SurgeCapabilities Component", () => {
  const localVue = createLocalVue();
  localVue.use(validators);
  let vuetify: Vuetify;
  let wrapper: Wrapper<DefaultProps & Vue, Element>;

  beforeEach(() => {
    jest.spyOn(AcquisitionPackage, 'loadData').mockImplementation(
      () => Promise.resolve({}));

    vuetify = new Vuetify();
    wrapper = mount(SurgeCapabilities, {
      localVue,
      vuetify,
    });
  });

  afterEach(()=>{
    jest.clearAllMocks();
  })

  it("renders successfully", async () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("hasChanged() retrieves expected boolean value", async () => {
    const capabilities = "30";
    wrapper.setData({
      capabilities,
      savedData:{
        capabilities: "40"
      }
    })
    const hasChanged: boolean = wrapper.vm.hasChanged();
    expect(hasChanged).toBe(true);
  });

  it("saveOnLeave() if data has changed, set new data to " +
  "AcquisitionPackage.setRequirementsCostEstimate", async () => {
    const capabilities = "30";
    wrapper.setData({
      capabilities,
      savedData:{
        capabilities: "40"
      }
    })
    await wrapper.vm.saveOnLeave();
    const reqCostEst = await IGCEStore.getSurgeRequirements();
    expect(reqCostEst.capabilities).toBe(capabilities);
  });

})
