class MainDashboard {
  elements = {
    full_name: () => cy.getByDataId("sidenav-user-full-name"),
    username: () => cy.getByDataId("sidenav-username"),
  };
}

module.exports = new MainDashboard();
