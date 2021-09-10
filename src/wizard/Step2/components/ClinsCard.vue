<template>
  <v-form ref="form" lazy-validation>
    <v-container
      fluid
      class="clins-card width-100"
      style="width: 900px !important"
    >
      <v-row>
        <v-col cols="11" class="width-100 d-block">
          <v-expansion-panels>
            <v-expansion-panel @click="calculateObligatedPercent">
              <v-expansion-panel-header class="body-lg font-weight-bold">
                <template v-slot:default="{ open }">
                  <v-container>
                    <v-row>
                      <v-col cols="1" class="h4 text--base-darkest">{{
                        card_number
                      }}</v-col>
                      <v-col cols="11" class="h4 text--base-darkest">{{
                        `CLIN ${clin_number}`
                      }}</v-col>
                    </v-row>
                    <v-row v-if="!open && _idiq_clin !== ''">
                      <v-col cols="1"></v-col>
                      <v-col cols="11">
                        <v-row>
                          <!--IDIQ Type-->
                          <v-col>
                            <v-row class="mb-n8">
                              <v-col
                                class="
                                  micro
                                  font-weight-bold
                                  text--base-darkest
                                "
                              >
                                IDIQ Type
                              </v-col>
                            </v-row>
                            <v-row>
                              <v-col class="optional body">{{
                                _idiq_clin
                              }}</v-col>
                            </v-row>
                          </v-col>
                          <!-- Total Value -->
                          <v-col>
                            <v-row class="mb-n8">
                              <v-col
                                class="
                                  micro
                                  font-weight-bold
                                  text--base-darkest
                                "
                              >
                                Total Value
                              </v-col>
                            </v-row>
                            <v-row>
                              <v-col class="optional body">{{
                                formatCurrency(total_clin_value)
                              }}</v-col>
                            </v-row>
                          </v-col>

                          <!-- Obligated Funds -->
                          <v-col>
                            <v-row class="mb-n8">
                              <v-col
                                class="
                                  micro
                                  font-weight-bold
                                  text--base-darkest
                                "
                              >
                                Obligated Funds
                              </v-col>
                            </v-row>
                            <v-row>
                              <v-col class="optional body">{{
                                formatCurrency(_obligated_funds)
                              }}</v-col>
                            </v-row>
                          </v-col>
                          <!-- Period of Performance -->
                          <v-col>
                            <v-row class="mb-n8">
                              <v-col
                                class="
                                  micro
                                  font-weight-bold
                                  text--base-darkest
                                "
                              >
                                Period of Performance
                              </v-col>
                            </v-row>
                            <v-row>
                              <v-col
                                class="optional body"
                                v-if="_pop_start_date !== ''"
                              >
                                {{
                                  `${formatDate(
                                    _pop_start_date
                                  )} - ${formatDate(_pop_end_date)}`
                                }}</v-col
                              >
                            </v-row>
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-container>
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-row>
                  <v-col cols="11">
                    <atat-text-field
                      class="mb-3"
                      id="clin-number"
                      label="CLIN Number"
                      :rules="clinNumberRules"
                      :value.sync="_clin_number"
                    />
                    <atat-select
                      class="clin-idiq-select"
                      label="Corresponding IDIQ CLIN"
                      placeholder="- Select -"
                      :items="idiq_clin_items"
                      :selectedValue.sync="_idiq_clin"
                      :rules="correspondingIDIQRules"
                    >
                    </atat-select>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <div class="h4 font-weight-bold my-3">CLIN Funding</div>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="11">
                    <v-form ref="fundFields">
                      <atat-text-field
                        class="mb-3"
                        id="total-clin-value"
                        label="Total CLIN Value"
                        :rules="totalClinRules"
                        :helpText="clinHelpText"
                        :value.sync="_total_clin_value"
                        prefix="$"
                      />
                      <atat-text-field
                        class="mb-5"
                        id="obligated-funds"
                        label="Obligated Funds"
                        :rules="obligatedFundRules"
                        :helpText="obligatedFundsHelpText"
                        :value.sync="_obligated_funds"
                        @onkeyup="calculateObligatedPercent"
                        prefix="$"
                      />
                      <div v-show="obligatedPercent <= 100">
                        <span class="h4 font-weight-bold"
                          >{{ obligatedPercent }}%</span
                        >
                        of your Total Funds are obligated
                      </div>
                      <div id="progressBarWrapper" class="width-100">
                        <div
                          id="progressBar"
                          value="0"
                          max="100"
                          ref="progress-bar"
                        ></div>
                      </div>
                    </v-form>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="11">
                    <div class="h4 font-weight-bold my-6">
                      Period of Performance (PoP)
                    </div>
                    <div class="ma-0">
                      <v-row class="pt-3">
                        <v-col class="d-flex align-center py-0">
                          <label
                            :id="'start_date_text_field_label'"
                            :class="[
                              datePickerErrorMessages.length > 0
                                ? 'font-weight-bold'
                                : '',
                              'my-1 form-field-label mr-9',
                            ]"
                            :for="'start_date_text_field'"
                            :style="'width:' + datePickerWidth"
                          >
                            Start Date
                          </label>
                          <label
                            :id="'end_date_text_field_label'"
                            :class="[
                              datePickerErrorMessages.length > 0
                                ? 'font-weight-bold'
                                : '',
                              'my-1 form-field-label',
                            ]"
                            :for="'end_date_text_field'"
                            :style="'width:' + datePickerWidth"
                          >
                            End Date
                          </label>
                        </v-col>
                      </v-row>
                      <v-row v-if="datePickerErrorMessages.length > 0">
                        <v-col ool="!2" class="py-0 mb-2">
                          <div
                            v-for="(error, idx) in datePickerErrorMessages"
                            :key="idx"
                          >
                            <div class="error--text">
                              <div class="v-messages__message">
                                {{ error.message }}
                              </div>
                            </div>
                          </div>
                        </v-col>
                      </v-row>
                      <v-row class="d-flex align-start mt-0">
                        <v-col cols="12">
                          <v-form
                            ref="DatePickerFields"
                            class="d-flex align-center"
                          >
                            <atat-date-picker
                              id="startDate"
                              label="Start Date"
                              :rules="popStartRules"
                              :errormessages.sync="datePickerErrorMessages"
                              title="What is the PoP Start Date?"
                              :daterange.sync="dateRange"
                              :date.sync="_pop_start_date"
                              :textboxvalue="_pop_start_date"
                              :nudgeleft="1"
                              :min="minDate"
                              :max="maxDate"
                              class="mr-9"
                              :style="'width:' + datePickerWidth"
                            />
                            <atat-date-picker
                              id="endDate"
                              label="End Date"
                              :errormessages.sync="datePickerErrorMessages"
                              :rules="popEndRules"
                              :daterange.sync="dateRange"
                              :date.sync="_pop_end_date"
                              title="What is the PoP End Date?"
                              :textboxvalue="_pop_end_date"
                              :nudgeleft="240"
                              :min="minDate"
                              :max="maxDate"
                              :style="'width:' + datePickerWidth"
                            />
                          </v-form>
                        </v-col>
                      </v-row>
                    </div>
                  </v-col>
                </v-row> </v-expansion-panel-content
            ></v-expansion-panel>
          </v-expansion-panels>
        </v-col>
        <v-col>
          <v-dialog v-model="dialog" persistent max-width="450">
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon>
                <v-icon v-bind="attrs" v-on="on">delete</v-icon>
              </v-btn>
            </template>
            <v-card>
              <v-card-title class="h3">
                Remove CLIN {{ clin_number }}?
              </v-card-title>
              <v-card-text class="body-lg"
                >This CLIN will be deleted from your Task Order. Any changes you
                made to CLIN details will not be saved.</v-card-text
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  class="link-button"
                  @click="dialog = false"
                  :ripple="false"
                >
                  Cancel
                </v-btn>
                <v-btn
                  class="primary"
                  width="140px"
                  @click="$emit('delete', card_number), (dialog = false)"
                  :ripple="false"
                >
                  Remove CLIN
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, PropSync, Watch } from "vue-property-decorator";
import moment from "moment";
@Component({
  components: {},
})
export default class ClinsCard extends Vue {
  @Prop({ required: true, default: () => -1 }) card_number!: number;
  @PropSync("clin_number", { required: true }) _clin_number!: string;
  @PropSync("idiq_clin") _idiq_clin!: string;
  @PropSync("total_clin_value") _total_clin_value!: number;
  @PropSync("obligated_funds") _obligated_funds!: number;
  @PropSync("pop_start_date") _pop_start_date!: string;
  @PropSync("pop_end_date") _pop_end_date!: string;

  get Form(): Vue & { validate: () => boolean } {
    return this.$refs.form as Vue & { validate: () => boolean };
  }

  get FundFields(): Vue & { validate: () => boolean } {
    return this.$refs.fundFields as Vue & { validate: () => boolean };
  }

  get DatePickerFields(): Vue & { validate: () => boolean } {
    return this.$refs.DatePickerFields as Vue & { validate: () => boolean };
  }

  @Watch("_pop_start_date")
  protected setStartDate(): void {
    this.setDateRange();
  }

  @Watch("_pop_end_date")
  protected setEndDate(): void {
    this.setDateRange();
  }

  private setDateRange(): void {
    let isDateRangeValid = moment(this._pop_start_date).isBefore(
      this._pop_end_date
    );
    if (this.datePickerErrorMessages.length > 0 || !isDateRangeValid) {
      this.dateRange = ["", ""];
    } else if (isDateRangeValid) {
      this.dateRange[0] = this._pop_start_date;
      this.dateRange[1] = this._pop_end_date;
    }
  }

  private clinHelpText =
    "This is the full amount of money requested\n" +
    "in a task order. It does not have to be spent\n" +
    "duing the CLIN’s period of performance.";
  private obligatedFundsHelpText =
    "Obligated funds are the legal amount allocated\n" +
    "for a project or contract that can be spent during\n" +
    "the CLIN’s period of performance.";

  private idiq_clin_items = [
    "IDIQ CLIN 0001 Unclassified IaaS/PaaS",
    "IDIQ CLIN 0002 Classified IaaS/PaaS",
    "IDIQ CLIN 0003 Unclassified Cloud Support Package",
    "IDIQ CLIN 0004 Classified Support Package",
  ];
  private obligatedPercent = "";

  private dateRange = ["", ""];
  private datePickerErrorMessages = [];
  private formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  private dialog = false;
  private progress: HTMLProgressElement | undefined;
  private minDate = "2020-10-01";
  private maxDate = "2021-09-30";
  private datePickerWidth = "216px";

  public progressEvent(): void {
    const progress = this.$refs["progress-bar"] as HTMLProgressElement;
    const width = (this._obligated_funds / this._total_clin_value) * 100;
    if (progress) {
      progress.style.width = width + "%";
    }
    this.obligatedPercent = width.toString();
  }

  public rules = {};

  public formatCurrency(value: number): string {
    return this.formatter.format(value);
  }

  public formatDate(value: string): string {
    return moment(new Date(value)).format("MMMM DD, YYYY");
  }

  public JWCCContractEndDate = "2022-09-14";

  public calculateObligatedPercent(): void {
    const progress = this.$refs["progress-bar"] as HTMLProgressElement;
    const percent: number =
      (this._obligated_funds / this._total_clin_value) * 100;
    this.obligatedPercent =
      percent >= 100 ? this.obligatedPercent : percent.toFixed(2);
    if (progress) {
      progress.style.width = this.obligatedPercent + "%";
    }
  }

  get clinNumberRules(): any[] {
    const validationRules = [];
    validationRules.push(
      (v: string) => v !== "" || "Please enter your 4-digit CLIN Number"
    );
    validationRules.push(
      (v: string) =>
        /^\d+$/.test(v) || "Please enter a valid 4-digit CLIN Number"
    );
    validationRules.push(
      (v: string) => v.length < 5 || "CLIN number cannot exceed 4 characters"
    );
    return validationRules;
  }

  get totalClinRules(): any[] {
    const validationRules = [];
    validationRules.push((v: string) => v !== "" || "Please enter CLIN value");
    validationRules.push(
      (v: string) =>
        (v !== "" && /^\d+$/.test(v)) || "Please enter a valid number"
    );
    validationRules.push(
      (v: number) =>
        v >= parseInt(this._obligated_funds.toString()) ||
        "Obligated Funds cannot exceed total CLIN Values"
    );
    return validationRules;
  }

  get obligatedFundRules(): any[] {
    const validationRules = [];
    validationRules.push(
      (v: number) => v.toString() !== "" || "Please enter your obligated Funds"
    );
    validationRules.push(
      (v: string) => /^\d+$/.test(v) || "Please enter a valid number"
    );
    validationRules.push(
      (v: number) =>
        v <= parseInt(this._total_clin_value.toString()) ||
        "Obligated Funds cannot exceed total CLIN Values"
    );
    return validationRules;
  }

  get popStartRules(): any[] {
    const validationRules = [];
    let start = this._pop_start_date;
    let end = this._pop_end_date;
    let startDateIsValid =
      /([2]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/.test(start);
    let endDateIsValid =
      /([2]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/.test(end);
    
    if (start !== "") {
      validationRules.push(
        () =>
          start !== "" ||
          "Please enter the start date for your CLIN's period of performance"
      );
      validationRules.push(
        () =>
          startDateIsValid ||
          "Please enter a start date using the format 'YYYY-MM-DD'"
      );
    }

    if (startDateIsValid) {
      validationRules.push(
        () =>
          Date.parse(start) < Date.parse(this.JWCCContractEndDate) ||
          "The end date must be before or on " + this.JWCCContractEndDate
      );
    }

    if (startDateIsValid && endDateIsValid) {
      validationRules.push(
        () =>
          moment(start).isBefore(end) ||
          "The period of performance start date must be before the end date"
      );
    }
    return validationRules;
  }

  get popEndRules(): any[] {
    const validationRules = [];
    let start = this._pop_start_date;
    let end = this._pop_end_date;
    let startDateIsValid =
      /([2]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/.test(start);
    let endDateIsValid =
      /([2]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/.test(end);

    if (end !== "") {
      validationRules.push(
        () =>
          end !== "" ||
          "Please enter the end date for your CLIN's period of performance"
      );
      validationRules.push(
        () =>
          endDateIsValid ||
          "Please enter an end date using the format 'YYYY-MM-DD'"
      );
    }

    if (endDateIsValid) {
      validationRules.push(
        () =>
          Date.parse(end) < Date.parse(this.JWCCContractEndDate) ||
          "The end date must be before or on " + this.JWCCContractEndDate
      );
    }

    if (startDateIsValid && endDateIsValid) {
      validationRules.push(
        () =>
          moment(start).isBefore(end) ||
          "The period of performance end date must be after the start date"
      );
    }
    return validationRules;
  }

  get correspondingIDIQRules(): any[] {
    const validationRules = [];
    validationRules.push(
      (v: string) => v !== "" || "Please select an IDIQ CLIN type"
    );
    return validationRules;
  }

  @Watch("_obligated_funds")
  @Watch("_total_clin_value")
  validateFundsFields(): void {
    this.FundFields.validate();
  }

  @Watch("_clin_number")
  @Watch("_idiq_clin")
  validateFormFields(): void {
    this.Form.validate();
  }

  @Watch("_pop_start_date")
  @Watch("_pop_end_date")
  validateDatePickerFields(): void {
    this.DatePickerFields.validate();
  }

  public async validateForm(): Promise<boolean> {
    let validated = false;
    await this.$nextTick(() => {
      validated = this.Form.validate();
    });
    return validated;
  }

  private updated(): void {
    this.calculateObligatedPercent();
  }
}
</script>
