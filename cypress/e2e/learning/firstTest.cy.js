///<reference types="cypress" />
describe("first-test", () => {
  beforeEach(() => {
    cy.clearAllCookies();
    cy.visit("http://google.com");
  });
  it("hi", () => {
    cy.get("button").contains("Odrzuć wszystko").click();
    cy.get("[name='q']").should("be.visible").type("Hello");
    cy.get("ul li").should("have.length", 7);
  });
});
