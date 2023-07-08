/// <reference types="cypress" />

describe("Main dashboard", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.loginViaUi({ username: "Katharina_Bernier", password: "s3cret" });
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
