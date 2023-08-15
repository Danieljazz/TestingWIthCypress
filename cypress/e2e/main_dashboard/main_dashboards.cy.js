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
  it.only("Check transaction filter", () => {
    cy.transactionFilter(480, 880);
    cy.get("[data-test='transaction-list']")
      .find("li")
      .should("have.length", 5)
      .and(($li) => {
        $li.find("p").first().should("have.text", "kjh");
      })
      .pause();
  });
  it("Empty filter", () => {
    cy.transactionFilter(480, 880);
    cy.transactionFilter(580, 880);
    cy.getByDataId("empty-list-header")
      .find("h2")
      .should("have.text", "No Transactions");
  });
});
