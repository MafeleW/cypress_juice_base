import BasePage from "../pageObjects/basePage";

class LoginPage extends BasePage {

  static get url() {
    return "/login";
  }

  static get newCustomerLink () {
    return cy.get("#newCustomerLink");
  }

  static get emailInput () {
    return cy.get("#email");
  }

  static get passwordInput () {
    return cy.get("#password");
  }

  static get loginButton () {
    return cy.get("#loginButton");
  }

}

export default LoginPage;