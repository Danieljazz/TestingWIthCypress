class MainDashboard {
  elements = {
    fullName: () => cy.getByDataId("sidenav-user-full-name"),
    username: () => cy.getByDataId("sidenav-username"),
    balance: () => cy.getByDataId("sidenav-user-balance"),
    notifCount: () =>
      cy.getByDataId("nav-top-notifications-count").find("span"),
    transactionList: () => cy.getByDataId("transaction-list"),
    emptyListText: () => cy.getByDataId("empty-list-header").find("h2"),
    navTab: (tab) => cy.get("[role='tablist']").contains(tab),
  };
}

module.exports = new MainDashboard();
