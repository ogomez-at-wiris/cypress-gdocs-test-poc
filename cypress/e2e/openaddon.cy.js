import GoogleLoginPage from '../support/pages/google_login';

const googleLoginPage = new GoogleLoginPage();
beforeEach(() => {
  cy.loginToGoogleDocs();
});

it('opens the google test document correctly', () => {
  cy.visit(Cypress.env()['testDocumentURL']);
});