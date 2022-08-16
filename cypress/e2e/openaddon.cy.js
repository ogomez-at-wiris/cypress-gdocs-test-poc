import GoogleLoginPage from '../support/pages/google_login';

const googleLoginPage = new GoogleLoginPage();
beforeEach(() => {
  // This event is necessary because Google Docs itself throws errors. If these errors aren't skipped, Cypress will fail the test...
  Cypress.on("uncaught:exception", () => {
    return false;
  })

  cy.loginToGoogleDocs();
});

it('opens the google test document correctly', () => {
  cy.visit(Cypress.env()['testDocumentURL']);
  cy.openMathtypeAddon();
});