import BasePage from "../pageObjects/basePage";

class SavedAdressPage extends BasePage {

  static get url() {
    return "/#/address/saved";
  }

  static get addNewButton () {
    return cy.get("button[aria-label='Add a new address']");
  }
}

export default SavedAdressPage;