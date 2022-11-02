import Vue from "vue";
import Vuetify from "vuetify";
import {createLocalVue, mount, Wrapper} from "@vue/test-utils";
import {DefaultProps} from "vue/types/options";
import UploadChartsDiagrams
  from "@/steps/03-Background/CurrentEnvironment/UploadChartsDiagrams.vue";
import validators from "../../../plugins/validation";


Vue.use(Vuetify);

describe("Testing UploadChartsDiagrams Component", () => {
  const localVue = createLocalVue();
  localVue.use(validators);
  let vuetify: Vuetify;
  let wrapper: Wrapper<DefaultProps & Vue, Element>;

  beforeEach(() => {
    vuetify = new Vuetify();
    wrapper = mount(UploadChartsDiagrams, {
      vuetify,
      localVue
    });
  });

  describe("testing UploadChartsDiagrams render", () => {
    it("renders successfully", async () => {
      expect(wrapper.exists()).toBe(true);
    });
  })


})
