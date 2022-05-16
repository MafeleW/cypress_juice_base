import BasePage from "../pageObjects/basePage";

class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get accountButton () {
    return cy.get("#navbarAccount");
  }

  static get loginButton  () {
    return cy.get("#navbarLoginButton");
  }

  static get goToUserProfileButton () {
    return cy.get("button[aria-label='Go to user profile']");
  }

  static get searchButton () {
    return cy.get("#searchQuery");
  }

  static get searchInput () {
    return cy.get("#mat-input-0");
  }

  static get searchResultItems () {
    return cy.get("app-search-result div .item-name");
  }

  static get productDetails () {
    return cy.get("app-product-details");
  }

  static get productDetailsCloseButton () {
    return cy.get("button[aria-label='Close Dialog']");
  }

  static get productReviewButton () {
    return cy.get("mat-expansion-panel[aria-label='Expand for Reviews']");
  }

  static get productComments () {
    return cy.get(".comment");
  }

  static get productReviewInput () {
    return cy.get("textarea[aria-label='Text field to review a product']");
  }

  static get productReviewSubmit () {
    return cy.get("button[aria-label='Send the review']")
  }
}

export default HomePage;
