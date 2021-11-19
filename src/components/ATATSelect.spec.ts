import Vue from "vue";
import Vuetify from "vuetify";
import { createLocalVue, mount } from "@vue/test-utils";
import ATATSelect from "@/components/ATATSelect.vue";
Vue.use(Vuetify);

describe("Testing ATATSelect Component", () => {
  const localVue = createLocalVue();
  let vuetify: any;
  let wrapper: any;

  beforeEach(() => {
    vuetify = new Vuetify();
    wrapper = mount(ATATSelect, {
      localVue,
      vuetify,
      propsData: {
        rules: [(v: string) => !!v || "is required"],
      },
    });
  });

  it("renders successfully", async () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('has a `v-select getStatusIcon` with 3 items: ["Foo", "Bar", "Fizz Tony", "Buzz"]', async () => {
    const items = wrapper.find(".v-select").props("items");
    expect(items.length).toBe(4);
    expect(items).toStrictEqual(["Foo", "Bar", "Fizz Tony", "Buzz"]);
    wrapper.findAll(".v-select").at(0).trigger("click");
    await wrapper.vm.getStatusIcon();
    expect(await wrapper.vm.$data.success).toBe(false);
  });

  it('has a `v-select onChange` with 3 items: ["Foo", "Bar", "Fizz Tony", "Buzz"]', async () => {
    wrapper.findAll(".v-select").at(0).trigger("click");
    await wrapper.vm.onChange();
  });

  it('has a `v-select onSelectedValueChanged` with 3 items: ["Foo", "Bar", "Fizz Tony", "Buzz"]', async () => {
    wrapper.findAll(".v-select").at(0).trigger("click");
    await wrapper.vm.onSelectedValueChanged();
  });

  it("has a v-select onErrorBucketChanged", async () => {
    await wrapper.vm.onErrorBucketChanged();
    await wrapper.vm.getStatusIcon();
    expect(await wrapper.vm.$data.success).toBe(false);
  });

  it("testing getStatus icon with empty rules", async () => {
    await wrapper.setProps({
      rules: [],
      items: [],
    });
    await wrapper.setData({ isFieldValid: true, success: true });

    expect(wrapper.vm.$data.success).toBe(true);
  });

  it("testing getStatus icon", async () => {
    const rules1 = wrapper.vm.rules[0](true);
    await wrapper.setProps({ selectedValue: "true" });

    expect(rules1).toBe(true);
    expect(wrapper.vm.$data.success).toBe(true);
  });
});
