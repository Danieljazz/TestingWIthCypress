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
  it.only("Check user info", () => {
    cy.fixture("./user/userData").then((user) => {
      MainDasboard.elements.fullName().should("have.text", user.fullName);
      MainDasboard.elements.username().should("have.text", user.username);
      mainDashboard.elements.balance().should("have.text", user.balance);
      mainDashboard.elements.notifCount().should("have.text", 8);
    });
  });
  it("Check transaction filter home page", () => {
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
  it("Friends tab transactions", () => {
    mainDashboard.elements.navTab("Friends").click().pause();
  });

  it("Empty filter", () => {
    cy.transactionFilter(380, 880);
    cy.transactionFilter(580, 880);
    mainDashboard.elements
      .emptyListText()
      .should("have.text", "No Transactions");
  });
});
