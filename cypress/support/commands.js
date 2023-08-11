// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("loginViaUi", (user) => {
  cy.get("#username").type(user.username);
  cy.get("#password").type(user.password);
  cy.get("[data-test='signin-submit']").click();
  cy.get("[data-test='transaction-list']", { timeout: 5000 }).should(
    "be.visible"
  );
});

Cypress.Commands.add("transactionFilter", (min, max) => {
  cy.get("[data-test='transaction-list-filter-amount-range-button']")
    .scrollIntoView()
    .click({ force: true });
  cy.get("[data-test='transaction-list-filter-amount-range-slider']").click(
    min * 0.1875,
    0
  );
  cy.get("[data-test='transaction-list-filter-amount-range-slider']").click(
    max * 0.2,
    0
  );
});
