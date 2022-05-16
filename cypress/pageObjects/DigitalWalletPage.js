import BasePage from "../pageObjects/basePage";

class DigitalWalletPage extends BasePage {

  static get url() {
    return "/#/wallet";
  }

  static get walletBalance () {
    return cy.get(".confirmation");
  }

  static get balanceInput () {
    return cy.get("input[aria-label='Enter an amount']");
  }

  // #
}

export default DigitalWalletPage;