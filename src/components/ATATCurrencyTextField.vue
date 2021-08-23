<template>
  <ATATTextField
    @blur="focusOut"
    @focus="focusIn"
    :value.sync="formattedValue"
  ></ATATTextField>
</template>

<script lang="ts">
import { VTextField } from "vuetify/lib";
import ATATTextField from "./ATATTextField.vue";
import { Component, PropSync, Watch } from "vue-property-decorator";

@Component({
  components: {
    ATATTextField,
  },
})
export default class ATATCurrencyTextField extends VTextField {
  @PropSync("value", { required: true }) _value!: string;

  private formattedValue = "";
  public currencyValue = 0;

  created(): void {
    if (this._value) {
      this.formattedValue = this._value;

      this.updatedDisplayValue();
    }
  }

  @Watch("currencyValue")
  onCurrencyValueChanged(): void {
    this.$emit("update:value", this.currencyValue);
  }

  updatedDisplayValue(): void {
    // Recalculate the currencyValue after ignoring "$" and "," in user input

    this.currencyValue = parseFloat(
      this.formattedValue.replace(/[^\d\.]/g, "")
    );
    // Ensure that it is not NaN. If so, initialize it to zero.
    // This happens if user provides a blank input or non-numeric input like "abc"
    if (isNaN(this.currencyValue)) {
      this.formattedValue = "NaN";
    } else {
      // Format display value based on calculated currencyValue
      this.formattedValue =
        "$ " +
        this.currencyValue
          .toFixed(2)
          .replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,");
    }
  }

  focusOut(): void {
    console.log("focusOut");

    this.updatedDisplayValue();
    this.$emit("update:value", this.currencyValue);

    console.log(`${this._value}`)
  }

  focusIn(): void {
    // Unformat display value before user starts modifying it

    if (this.formattedValue === "NaN") {
      return;
    }

    this.formattedValue = this.currencyValue.toString();
  }
}
</script>
