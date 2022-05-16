import CreateAdressPage from "../../pageObjects/CreateAdressPage";
import DigitalWalletPage from "../../pageObjects/DigitalWalletPage";
import HomePage from "../../pageObjects/HomePage";
import LoginPage from "../../pageObjects/LoginPage";
import PaymentOptionsPage from "../../pageObjects/PaymentOptionsPage";
import RegistrationPage from "../../pageObjects/RegistrationPage";
import SavedAdressPage from "../../pageObjects/SavedAdressPage";
import SavedPaymentMethodsPage from "../../pageObjects/SavedPaymentMethodsPage";

describe("Juice-shop", () => {
  beforeEach(() => {
    HomePage.visit();
    HomePage.dismissButton.click();
    HomePage.meWantItButton.click();
  });

  it("Registration", () => {
    // TODO: Implement me
    // Click on Account > Login
    HomePage.accountButton.click();
    HomePage.loginButton.click();

    // Click on "new customer" link
    LoginPage.assertIsCurrentPage();
    LoginPage.newCustomerLink.click();

    // Input fields and submit
    RegistrationPage.assertIsCurrentPage();
    RegistrationPage.emailInput.type("random" + Math.floor(Math.random() * 1000) + "@email.com");
    RegistrationPage.passwordInput.type("random12345");
    RegistrationPage.repeatPasswordInput.type("random12345");
    RegistrationPage.securityQuestionDropdown.click();
    RegistrationPage.securityQuestionOptions.contains("Your favorite book?").click();
    RegistrationPage.securityQuestionInput.type("randomAnswer");
    RegistrationPage.registerButton.click();

    // Validate
    LoginPage.assertIsCurrentPage();
    LoginPage.toastMessage.should(
      "contain", 
      "Registration completed successfully. You can now log in."
    );
  });

  it("Login", () => {
    // Click on Account > Login
    HomePage.accountButton.click();
    HomePage.loginButton.click();

    // Input fields and submit
    LoginPage.assertIsCurrentPage();
    LoginPage.emailInput.type("demo");
    LoginPage.passwordInput.type("demo");
    LoginPage.loginButton.click();

    // Validate
    HomePage.assertIsCurrentPage();
    HomePage.accountButton.click();
    HomePage.goToUserProfileButton.should("contain", "demo");
  });
});


describe("Juice-shop", () => {
  beforeEach(() => {
    cy.login('demo', 'demo');
    HomePage.visit();
  });

  it("User login", () => {
    HomePage.accountButton.click();
    HomePage.goToUserProfileButton.contains("demo").click();
  });

  it("Search and validate Lemon", () => {
    // Search for lemon
    HomePage.searchButton.click();
    HomePage.searchInput.type("Lemon{enter}");
    // Click on lemon
    HomePage.searchResultItems.contains("Lemon").click();
    // Validate
    HomePage.productDetails.should("contain", "Sour but full of vitamins.");
  });

  it("Search 500ml and validate Lemon", () => {
    HomePage.searchButton.click();
    HomePage.searchInput.type("500ml{enter}");
    HomePage.searchResultItems.contains("Lemon").click();
    HomePage.productDetails.should("contain", "Sour but full of vitamins.");
  });

  it("Search 500ml and validate all cards", () => {
    HomePage.searchButton.click();
    HomePage.searchInput.type("500ml{enter}");

    HomePage.searchResultItems.contains("Eggfruit").click();
    HomePage.productDetails.should("contain", "Now with even more exotic flavour.");
    HomePage.productDetailsCloseButton.click();

    HomePage.searchResultItems.contains("Lemon").click();
    HomePage.productDetails.should("contain", "Sour but full of vitamins.");
    HomePage.productDetailsCloseButton.click();

    HomePage.searchResultItems.contains("Strawberry").click();
    HomePage.productDetails.should("contain", "Sweet & tasty!");
    HomePage.productDetailsCloseButton.click();
  });

  it("Read a review for King", () => {
    HomePage.searchButton.click();
    HomePage.searchInput.type("King{enter}");
    HomePage.searchResultItems.contains("King").click();

    HomePage.productReviewButton.wait(500).click();
    HomePage.productComments.should("contain", "K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!");
  });

  it("Write a review for Raspberry", () => {
    HomePage.searchButton.click();
    HomePage.searchInput.type("Raspberry{enter}");
    HomePage.searchResultItems.contains("Raspberry").click().wait(500);

    HomePage.productReviewInput.type("Tastes like Raspberry");
    HomePage.productReviewSubmit.click();
    HomePage.productComments.should("contain", "Tastes like Raspberry");
  });

  it("Add address", () => {
    SavedAdressPage.visit();
    SavedAdressPage.addNewButton.click();

    // Input fields and submit
    CreateAdressPage.countryInput.type("Latvia");
    CreateAdressPage.nameInput.type("Random User");
    CreateAdressPage.mobileNumberInput.type("21349876");
    CreateAdressPage.zipCodeInput.type("LV-0000");
    CreateAdressPage.addressInput.type("Random street 10");
    CreateAdressPage.cityInput.type("Ventspils");
    CreateAdressPage.stateInput.type("Ventspils");
    CreateAdressPage.submitButton.click();

    // Validate

    SavedAdressPage.toastMessage.should(
      "contain", 
      "The address at Ventspils has been successfully added to your addresses."
    );
    SavedAdressPage.rows
      .contains("Latvia")
      .parent()
      .should("contain", "Random street 10");
  });

  it("Add payment option", () => {
    SavedPaymentMethodsPage.visit();

    // Input fields and submit
    SavedPaymentMethodsPage.addNewCardPanel.click();
    SavedPaymentMethodsPage.cardInfoTextInput("Name").type("Random user");
    SavedPaymentMethodsPage.cardInfoTextInput("Card Number").type("1111222200009876");

    SavedPaymentMethodsPage.cardInfoSelectInput("Expiry Month").select("12");
    SavedPaymentMethodsPage.cardInfoSelectInput("Expiry Year").select("2080");

    SavedPaymentMethodsPage.submitButton.click();

    // Validate
    SavedPaymentMethodsPage.toastMessage.should(
      "contain",
      "Your card ending with 9876 has been saved for your convenience"
    );
    SavedPaymentMethodsPage.rows
      .contains("Random user")
      .parent()
      .should("contain", "************9876");
  });

  
/*   it.only("Increase wallet balance", () => {
    DigitalWalletPage.visit();
 
    // Save current balance
    DigitalWalletPage.walletBalance.should("be.visible").then((el)  => {
      cy.wrap(el.text()).as("startingBal");
    });

    // Add balance
    let toAdd = 150;
    DigitalWalletPage.balanceInput.type(toAdd);
    DigitalWalletPage.submitButton.click();

    PaymentOptionsPage.assertIsCurrentPage();
    PaymentOptionsPage.choosePamentOption("9876");
    PaymentOptionsPage.continueButton.click();
    PaymentOptionsPage.toastMessage.should("contain", "Wallet successfully charged.");

    // Validate
    DigitalWalletPage.assertIsCurrentPage();
    DigitalWalletPage.walletBalance.should('be.visible').then((bal) => {
      cy.get("@startingBal").then((startingBal) => {
        expect(parseFloat(bal.text())).to.eq(parseFloat(startingBal) + toAdd);
      });
    });
  }); */

});