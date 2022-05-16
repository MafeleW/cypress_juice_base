import BasePage from "../pageObjects/basePage";

class SavedPaymentMethodsPage extends BasePage {

  static get url() {
    return "/#/saved-payment-methods";
  }

  static get addNewCardPanel () {
    return cy.get(".mat-expansion-panel-header");
  }

  static cardInfoTextInput(fieldName) {
    return cy
        .get("mat-label")
        .contains(fieldName)
        .parents(".mat-form-field-infix")
        .find("input");
  }

  static cardInfoSelectInput(fieldName) {
    return cy
        .get("mat-label")
        .contains(fieldName)
        .parents(".mat-form-field-infix")
        .find("select");
  }
}

export default SavedPaymentMethodsPage;