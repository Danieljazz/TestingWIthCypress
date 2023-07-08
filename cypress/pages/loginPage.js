class LoginPage {
  elements = {
    username: () => cy.get("#username"),
    password: () => cy.get("#password"),
    usernameValidation: () => cy.get("#username-helper-text"),
    passwordValidation: () => cy.get("#password-helper-text"),
  };
}

module.exports = new LoginPage();
