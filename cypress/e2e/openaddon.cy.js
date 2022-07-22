import GoogleLoginPage from '../support/pages/google_login';

const googleLoginPage = new GoogleLoginPage();
beforeEach(() => {
  // Preserve cookie in every test
  Cypress.Cookies.defaults({
    preserve: (cookie) => {
      return true;
    }
  })
});

describe('empty spec', () => {
  it('opens the google test document', () => {
    cy.visit('/', {
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
      }
    });

    googleLoginPage.getEmailAddressField().type(Cypress.env('googleUser'));
    googleLoginPage.getNextButton().click()

  })
})