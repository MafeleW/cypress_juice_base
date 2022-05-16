import BasePage from "../pageObjects/basePage";

class PaymentOptionsPage extends BasePage {

  static get url() {
    return "/#/payment/wallet";
  }

  static get balanceInput () {
    return cy.get("input[aria-label='Enter an amount']");
  }

  static choosePamentOption(value) {
    this.rows.contains(value).parent().find(".mat-radio-button").click();
  }

  static get continueButton () {
    return cy.get(".nextButton");
  }
}

export default PaymentOptionsPage;