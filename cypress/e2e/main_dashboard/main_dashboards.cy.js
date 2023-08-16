/// <reference types="cypress" />
import mainDashboard from "../../pages/mainDashboard";
import MainDasboard from "../../pages/mainDashboard";
describe("Main dashboard", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.fixture("./user/userLogin").then((data) => {
      cy.loginViaUi(data);
    });
  });
  it("Check user info", () => {
    MainDasboard.elements.full_name().should("have.text", "Edgar J");
    MainDasboard.elements.username().should("have.text", "@Katharina_Bernier");
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
    const liItemsValues = [
      { id: "transaction-sender", value: "Kaylin Homenick" },
      { id: "transaction-action", value: " paid " },
      { id: "transaction-receiver", value: "Arely Kertzmann" },
    ];
    mainDashboard.elements
      .transactionList()
      .find("li")
      .should("have.length", 5)
      .and(($li) => {
        liItemsValues.forEach((value) => {
          expect($li.find(`[data-test*=${value.id}]`).eq(0)).to.have.text(
            value.value
          );
        });
      });
  });
  it("Empty filter", () => {
    cy.transactionFilter(480, 880);
    cy.transactionFilter(580, 880);
    mainDashboard.elements
      .emptyListText()
      .find("h2")
      .should("have.text", "No Transactions");
  });
});
