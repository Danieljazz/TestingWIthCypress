class MainDashboard {
  elements = {
    full_name: () => cy.getByDataId("sidenav-user-full-name"),
    username: () => cy.getByDataId("sidenav-username"),
    transactionList: () => cy.getByDataId("transaction-list"),
    emptyListText: () => cy.getByDataId("empty-list-header"),
  };
}

module.exports = new MainDashboard();
