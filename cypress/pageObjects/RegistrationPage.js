import BasePage from "../pageObjects/basePage";

class RegistrationPage extends BasePage {

  static get url() {
    return "/register";
  }

  static get emailInput () {
    return cy.get("#emailControl");
  }

  static get passwordInput () {
    return cy.get("#passwordControl");
  }

  static get repeatPasswordInput () {
    return cy.get("#repeatPasswordControl");
  }

  static get repeatPasswordInput () {
    return cy.get("#repeatPasswordControl");
  }

  static get securityQuestionDropdown () {
    return cy.get("div.mat-form-field-placeholder");
  }

  static get securityQuestionOptions () {
    return cy.get("span.mat-option-text");
  }

  static get securityQuestionInput () {
    return cy.get("#securityAnswerControl");
  }

  static get registerButton () {
    return cy.get("#registerButton");
  }

}

export default RegistrationPage;