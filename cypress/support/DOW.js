import {
  getCheckboxId,
  getServiceOfferingNames,
  getCheckboxIds,
} from "../helpers";
import common from "../selectors/common.sel";
import "cypress-iframe";
import performanceReq from "../selectors/performanceReqs.sel";


//This command is to verify the checkbox label and header for the ServiceOffering Page
Cypress.Commands.add("verifyServiceOfferingHeader", (categoryObj) => {
  const categoryCheckBoxId = getCheckboxId(categoryObj.value);
  cy.selectServiceOfferingGroup([categoryCheckBoxId]);

  cy.verifyPageHeader("What type of " + categoryObj.label + " do you need?");
});

//This command is to verify the checkbox label on ServiceOffering Page and navigation
Cypress.Commands.add("verifyServiceOfferingsForCategory", (categoryObj) => {
  const serviceOfferingCheckboxLabels = [];
  categoryObj.serviceOfferingCypressLabels.forEach((label) => {
    serviceOfferingCheckboxLabels.push(label);
  });

  cy.verifyCheckBoxLabels(
    "input[type=checkbox]",
    serviceOfferingCheckboxLabels
  );

  const serviceOfferingNames = getServiceOfferingNames(categoryObj);

  const serviceOfferingCheckboxIds = getCheckboxIds(categoryObj);

  serviceOfferingCheckboxIds.forEach((checkboxId, index) => {
    if (checkboxId.indexOf("Other") === -1) {
      cy.deselectAllCheckboxes();
      cy.selectCheckBoxes([checkboxId]);
      cy.btnClick(common.continueBtn, " Continue ");

      cy.verifyPageHeader(
        "Now we’ll gather your requirements for " + serviceOfferingNames[index]
      );
      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(1000); // needed because with 2 back button clicks, needs a pause for scroll into view
      cy.btnClick(common.backBtn, "Back");
    }
  });
});

//This command is to verify the OtherCategories HeaderLabel on Summary Page
Cypress.Commands.add("verifyOtherServiceOfferings", (categories) => {
  categories.forEach((cat) => {
    cy.textExists(cat.headingSelector, cat.headingText);
    cy.hoverToolTip(
      cat.tooltipButtonSelector,
      cat.tooltipTextSelector,
      cat.tooltipText
    );
    cy.textExists(cat.linkSelector, " Add requirements ");
  });
});

//This command is to verify the checkbox label and header for the Compute Category
Cypress.Commands.add("verifyComputeHeader", (categoryObj) => {
  const categoryCheckBoxId = getCheckboxId(categoryObj.value);
  cy.selectServiceOfferingGroup([categoryCheckBoxId]);

  cy.verifyPageHeader(
    "Let’s start by gathering your " + categoryObj.label + " requirements"
  );
});

//Select compute option
Cypress.Commands.add(
  "selectComputeOption",
  (categoryObj, serviceOfferingGroups) => {
    cy.btnClick(common.continueBtn, " Continue ");
    cy.verifyPageHeader(" Let’s work on your performance requirements ");
    const categoryLabels = [];
    serviceOfferingGroups.forEach((obj) => {
      categoryLabels.push(obj.label);
    });
    cy.verifyCheckBoxLabels("input[type=checkbox]", categoryLabels);
    cy.verifyComputeHeader(categoryObj);
  }
);

//This command is to verify the Region labels
Cypress.Commands.add("verifyRegionCheckBoxesLabels", (categoryObj) => {
  cy.textExists(
    performanceReq.regionCheckboxLabel,
    "What region(s) do you need this instance deployed in?"
  );
  const regionCheckBoxesLabels = [];
  categoryObj.regionCypressLabels.forEach((label) => {
    regionCheckBoxesLabels.push(label);
  });
  const region =
    "This is the geographic location where your public cloud resources are located," +
    " e.g., within the continental U.S. (CONUS) or outside of the continental U.S. (OCONUS)." +
    " If you need a certain location, select Other and enter your specifications.";
  cy.hoverToolTip(
    performanceReq.regionTooltipBtn,
    performanceReq.regionTooltipText,
    region
  );

  cy.verifyCheckBoxLabels(performanceReq.regionGroup, regionCheckBoxesLabels);
});

//This command is to verify the Performance tier radio group labels
Cypress.Commands.add("verifyPerformanceTierRadioLabels", (categoryObj) => {
  cy.findElement(performanceReq.performanceTierLabel).scrollIntoView();
  cy.textExists(performanceReq.performanceTierLabel, " Performance tier ");
  const tooltipText =
    "This refers to your network speed and service availability." +
    " If you have size and performance details, select Other and enter your specifications.";
  cy.hoverToolTip(
    performanceReq.performanceTierTooltipBtn,
    performanceReq.performanceTierTootipText,
    tooltipText
  );
  const performanceTierRadioLabels = [];
  categoryObj.performanceTierCypressLabels.forEach((label) => {
    performanceTierRadioLabels.push(label);
  });

  cy.verifyRadioGroupLabels(
    performanceReq.performanceRadioGroup,
    performanceTierRadioLabels
  );
});

//This command is to verify the list of storageType dropdown
Cypress.Commands.add("verifyStorageTypeListItems", (categoryObj) => {
  cy.findElement(performanceReq.storageTypeLabel).scrollIntoView();
  cy.textExists(performanceReq.storageTypeLabel, " Storage type ");
  cy.dropDownClick(performanceReq.storageTypeDropdown);
  const storageTypeListItems = [];
  categoryObj.storageTypeCypressLabels.forEach((list) => {
    storageTypeListItems.push(list);
  });
  cy.verifyStringArray(
    performanceReq.storageTypeDropdownList,
    storageTypeListItems
  );
});

//This command is to verify the checkbox label and header for the Compute Category
Cypress.Commands.add("verifyGeneralXaaSHeader", (categoryObj) => {
  const categoryCheckBoxId = getCheckboxId(categoryObj.value);
  cy.selectServiceOfferingGroup([categoryCheckBoxId]);

  cy.verifyPageHeader(
    "Let’s gather your requirements for general IaaS, PaaS and SaaS"
  );
});

//select generalXaaS option
Cypress.Commands.add(
  "selectGeneralXaaSOption",
  (categoryObj, serviceOfferingGroups) => {
    cy.btnClick(common.continueBtn, " Continue ");
    cy.verifyPageHeader(" Let’s work on your performance requirements ");
    const categoryLabels = [];
    serviceOfferingGroups.forEach((obj) => {
      categoryLabels.push(obj.label);
    });
    cy.verifyCheckBoxLabels("input[type=checkbox]", categoryLabels);
    cy.verifyGeneralXaaSHeader(categoryObj);
  }
);

Cypress.Commands.add("anticipatedNeedUsage", (textSel, textVal, radioSel) => {
  cy.enterTextInTextField(textSel, textVal);
  cy.findElement(radioSel).click({
    force: true,
  });
});

Cypress.Commands.add(
  "verifyTableValues",
  (tableSel, expectedTableData, stopCellIndex) => {
    stopCellIndex = stopCellIndex ?? 1000;
    cy.findElement(tableSel).as("table");
    cy.findElement("@table")
      .find("tbody")
      .find("tr")
      .each(($row, rowIndex) => {
        cy.wrap($row)
          .find("td")
          .each(($cell, cellIndex) => {
            cy.wrap($cell)
              .invoke("text")
              .then((text) => {
                if (cellIndex < stopCellIndex) {
                  const expectedValue = expectedTableData[rowIndex][cellIndex];

                  const trimmedText = text.trim().replace(/\s+/g, " ");
                  cy.log("Expected Value:", expectedValue);
                  cy.log("Trimmed Text:", trimmedText);
                  cy.log("expected:", expectedValue);
                  expect(trimmedText).to.equal(expectedValue);
                }
              });
          });
      });
  }
);

Cypress.Commands.add(
  "clickAndWaitForVisible",
  (elementSelector, targetSelector) => {
    cy.get(elementSelector)
      .should("be.visible")
      .click()
      .then(() => {
        cy.waitUntil(() => cy.findElement(targetSelector).should("be.visible"));
      });
  }
);

Cypress.Commands.add(
  "clickAndWaitForElementExists",
  (elementSelector, targetSelector) => {
    cy.get(elementSelector)
      .should("be.visible")
      .click()
      .then(() => {
        cy.waitUntil(() => cy.findElement(targetSelector).should("exist"));
      });
  }
);

//Tell us about your anticipated users and data needs

Cypress.Commands.add(
  "anticipatedUserDataNeedAccordion",
  (selectedClassifications) => {
    let expectedAccordionCount = 0;

    console.log("selectedClassifications:", selectedClassifications);

    if (selectedClassifications.includes("level2")) {
      expectedAccordionCount++;
    }
    if (selectedClassifications.includes("level4")) {
      expectedAccordionCount++;
    }
    if (selectedClassifications.includes("level5")) {
      expectedAccordionCount++;
    }
    if (selectedClassifications.includes("secret")) {
      expectedAccordionCount++;
    }
    if (selectedClassifications.includes("ts")) {
      expectedAccordionCount++;
    }

    cy.findElement(".mb-4.v-expansion-panels").then(($element) => {
      const actualAccordionCount = $element.length;
      console.log("actualAccordionCount:", actualAccordionCount);
      expect(actualAccordionCount).equal(expectedAccordionCount);
    });
  }
);

Cypress.Commands.add(
  "setDurationUserData",
  (anticipatedDurationVal, accordionIndex, userData, estimateGrowth, val) => {
    if (anticipatedDurationVal === "Yes") {
      cy.findElement(
        `#Radio_Accordion${accordionIndex}Question${userData}YES`
      ).scrollIntoView();
      cy.findElement(
        `#Radio_Accordion${accordionIndex}Question${userData}YES`
      ).click({ force: true });
      if (estimateGrowth === "singleGrowth") {
        cy.findElement(
          `#Radio_Accordion${accordionIndex}Question${userData}Single`
        ).click({ force: true });
        cy.findElement(
          `#SingleAmount_${userData}_${accordionIndex}_text_field`
        ).should("exist");
        cy.findElement(
          `#SingleAmount_${userData}_${accordionIndex}_text_field`
        ).type(val);
      } else if (estimateGrowth === "customGrowth") {
        cy.findElement(
          `#Radio_Accordion${accordionIndex}Question${userData}Multiple`
        ).scrollIntoView();
        cy.findElement(
          `#Radio_Accordion${accordionIndex}Question${userData}Multiple`
        ).click({ force: true });
        cy.findElement(
          `#BASE_0_${userData}_${accordionIndex}_text_field`
        ).scrollIntoView();
        cy.findElement(
          `#BASE_0_${userData}_${accordionIndex}_text_field`
        ).should("exist");
        cy.findElement(`#BASE_0_${userData}_${accordionIndex}_text_field`).type(
          val
        );
      }
    } else {
      cy.findElement(`#Radio_Accordion${accordionIndex}Question${userData}NO`).click({
        force: true,
      });
    }
  }
);
Cypress.Commands.add(
  "dataTransfer",
  (accordionIndex, dataTransferVal, selectedDropdownValue) => {
    const dropdownOptions = ["GB", "TB", "PB"];
    const dropdownSelector = `#DataTransfer_${accordionIndex}_dropdown`;

    cy.findElement(`#DataTransfer_${accordionIndex}_text_field`).type(
      dataTransferVal
    );
    cy.findElement(dropdownSelector).click();

    if (dropdownOptions.includes(selectedDropdownValue)) {
      const ddItemSel = `#DataTransfer_${accordionIndex}_DropdownListItem_${selectedDropdownValue}`;
      cy.findElement(ddItemSel).click();
    }
  }
);
