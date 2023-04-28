<template>
  <v-form ref="form" lazy-validation>
    <v-container fluid class="container-max-width">
      <v-row>
        <v-col class="col-12">
          <h1 class="mb-3">
            {{ pagewHeaderIntro }} the cause of your sole source situation
          </h1>
          <div v-html="soleSourceCauseGuideline"></div>
          <ATATExpandableLink
              aria-id="instructionForThisPortionJ&A"
          >
            <template v-slot:header>
              Instructions for this portion of the J&A
            </template>
            <template v-slot:content>
              <p class="mb-4">
                Be sure to explain any actual or apparent time lags between events.
                At the very least, include:
              </p>
              <ol class="_atat-ol">
                <li>
                  If full and open competition would be feasible had more time been available,
                  discuss other factors that impacted the decision to solicit only one source
                  (e.g., time required to conduct a competitive procurement; consideration of phase-
                  in/phase-out requirements; complexity of requirement; etc.).
                </li>
                <li>
                  If the required delivery date could have been satisfied using full and open
                  competition on the date the requirement first became known, provide an
                  explanation for the delay in submitting the requirement.
                </li>
                <li>
                  If normal contracting methods could not have satisfied the required delivery
                  date, describe the circumstances that caused this emergency and how they will
                  be prevented in the future.
                </li>
              </ol>
            </template>
          </ATATExpandableLink>

          <ATATTextArea
              id="causeOfSoleSourceSituation"
              class="max-width-740"
              :rows="11"
              :rules="
              [
                $validators.required(
                  'Enter an explanation for the cause of your sole source situation.'
                ),
                $validators.maxLength(
                  2500,
                  'Please limit your description to 2500 characters or less'
                ),
              ]
              "
              :value.sync="causeOfSoleSourceSituation"
              maxChars="2500"
          />
        </v-col>
      </v-row>
    </v-container>    
  </v-form>
</template>

<script lang="ts">
/* eslint-disable camelcase */
import AcquisitionPackage from "@/store/acquisitionPackage";
import _ from "lodash";
import {Component, Mixins} from "vue-property-decorator";
import ATATExpandableLink from "@/components/ATATExpandableLink.vue";
import ATATTextArea from "@/components/ATATTextArea.vue";
import SaveOnLeave from "@/mixins/saveOnLeave";
import {FairOpportunityDTO} from "@/api/models";
import {hasChanges} from "@/helpers";

@Component({
  components: {
    ATATExpandableLink,
    ATATTextArea
  },
})

export default class SoleSourceReview extends Mixins(SaveOnLeave) {
  public writeOwnExplanation = false;
  public userSelectedNoForAllQuestions = false;
  public causeOfSoleSourceSituation = "";
  public get pagewHeaderIntro(): string {
    return this.writeOwnExplanation ? "Tell us about" : "Let’s review";
  }

  get soleSourceCauseGuideline(): string {
    if (this.userSelectedNoForAllQuestions) {
      return `
        <p>
          Your project has an uncommon cause for an exception to fair opportunity, so
          unfortunately, we were not able to suggest language to help you complete this portion
          of the J&A. In the field below, please explain the factors that led to your decision
          to solicit only one source for this project. Be sure to include any relevant details
          from the following instructions.
        </p>
      `
    }
    else if (this.writeOwnExplanation) {
      return `
        <p>
          In the field below, please explain the factors that led to your decision to solicit only
          one source for this project. Be sure to include any relevant details from the following
          instructions.
        </p>
      `
    } else {
      return "";
    }
  }

  private get currentData(): FairOpportunityDTO {
    return {
      cause_of_sole_source_situation: this.causeOfSoleSourceSituation,
    } as FairOpportunityDTO;
  }
  private get savedData(): FairOpportunityDTO {
    return {
      cause_of_sole_source_situation:
          AcquisitionPackage.fairOpportunity?.cause_of_sole_source_situation || "",
    } as FairOpportunityDTO;
  }

  private hasChanged(): boolean {
    return hasChanges(this.currentData, this.savedData);
  }

  public async loadOnEnter(): Promise<void> {
    // this.writeOwnExplanation =
    // AcquisitionPackage.fairOppWritesOwnButtonClicked.soleSource === true;
    const storeData = _.cloneDeep(AcquisitionPackage.fairOpportunity);
    if (storeData) {
      this.writeOwnExplanation = storeData.write_own_sole_source_cause === "YES";
      if(storeData.cause_migration_addl_time_cost === "NO" &&
      storeData.cause_govt_engineers_training_certified === "NO" &&
      storeData.cause_product_feature_peculiar_to_csp === "NO") {
        this.userSelectedNoForAllQuestions = true;
      }
      this.causeOfSoleSourceSituation = storeData.cause_of_sole_source_situation as string;
    }
  }

  protected async saveOnLeave(): Promise<boolean> {
    try {
      if (this.hasChanged()) {
        await AcquisitionPackage.setFairOpportunity(this.currentData)
      }
    } catch (error) {
      console.log(error);
    }
    return true;
  }

  public async mounted(): Promise<void> {
    await this.loadOnEnter();
  }

}
</script>
