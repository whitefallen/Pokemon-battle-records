// untitled.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('Logging in', () => {
  it('should be able to fetch user profile', () => {
    cy.login().then((user) => {
      cy.visit('/');
    });
  });
});
