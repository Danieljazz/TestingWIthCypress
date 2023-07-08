/// <reference types="cypress" />
import loginPage from "../../pages/loginPage";
describe("testing login page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Presence of password, user inputs", () => {
    loginPage.elements.username().should("be.visible");
    loginPage.elements.password().should("be.visible");
  });

  it("Username validation text assert", () => {
    loginPage.elements.username().click();
    loginPage.elements.password().click();
    loginPage.elements
      .usernameValidation()
      .should("have.text", "Username is required");
  });

  it("Password input validation", () => {
    let toShortPasswords = ["a", "aa", "aaa"];
    for (const minPassword of toShortPasswords) {
      loginPage.elements.password().clear();
      loginPage.elements.password().type(`${minPassword}`);
      loginPage.elements.username().click();
      loginPage.elements
        .passwordValidation()
        .should("have.text", "Password must contain at least 4 characters");
    }
    loginPage.elements.password().clear();
    loginPage.elements.password().type(`aaaa`);
    loginPage.elements.username().click();
    loginPage.elements.passwordValidation().should("not.exist");
  });
});
