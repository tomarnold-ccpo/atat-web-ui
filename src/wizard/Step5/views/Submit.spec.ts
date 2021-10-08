import Vue from "vue";
import Vuetify from "vuetify";
import { createLocalVue, mount } from "@vue/test-utils";
import Submit from "@/wizard/Step5/views/Submit.vue";
import Vuex from "vuex";

Vue.use(Vuetify);

describe("Testing PostReview Component", () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  let vuetify: any;
  let wrapper: any;
  let store: any;

  beforeEach(() => {
    vuetify = new Vuetify();
    store = new Vuex.Store({});
    wrapper = mount(Submit, {
      localVue,
      vuetify,
      store,
      stubs: [],
    });
  });

  it("renders successfully", async () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("Test openSideDrawer", async () => {
    wrapper.vm.openSideDrawer("keydown");
    expect(wrapper.vm.openSideDrawer).toBeDefined();
  });
});
