/// <reference types="cypress" />

describe("Main dashboard", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.fixture("./user/userLogin").then((data) => {
      cy.loginViaUi(data);
    });
  });
  it("Check user info", () => {
    cy.get("[data-test='sidenav-user-full-name']").should(
      "have.text",
      "Edgar J"
    );
    cy.get("[data-test='sidenav-username']").should(
      "have.text",
      "@Katharina_Bernier"
    );
    cy.transactionFilter(120, 880);
    cy.pause();
  });
  it("Check bank account", () => {
    cy.get("[data-test='sidenav-user-full-name']").should(
      "have.text",
      "Edgar J"
    );
    cy.get("[data-test='sidenav-username']").should(
      "have.text",
      "@Katharina_Bernier"
    );
  });
});
