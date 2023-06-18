/// <reference types="cypress" />

describe("testing login page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5000");
  });

  it("Presence of password, user inputs", () => {
    cy.get("#username").should("be.visible");
    cy.get("#password").should("be.visible");
  });

  it("Username validation text assert", () => {
    cy.get("#username").click();
    cy.get("#password").click();
    cy.get("#username-helper-text").should("have.text", "Username is required");
  });

  it("Password input validation", () => {
    let minChars = 4;
    let toShortPasswords = ["a", "aa", "aaa"];
    for (const minPassword of toShortPasswords) {
      cy.get("#password").clear();
      cy.get("#password").type(`${minPassword}`);
      cy.get("#username").click();
      cy.get("#password-helper-text").should(
        "have.text",
        "Password must contain at least 4 characters"
      );
    }
    cy.get("#password").clear();
    cy.get("#password").type(`aaaa`);
    cy.get("#username").click();
    cy.get("#password-helper-text").should("not.exist");
  });
});
