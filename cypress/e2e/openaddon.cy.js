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

it('opens the google test document', () => {
  cy.task("getGoogleCookie", {
    username: Cypress.env()['googleUser'],
    password: Cypress.env()['googlePassword'],
  })
    .then((result) => {
      cy.log(`Result from task: ${result}`)
      /*
      cy.clearCookies()
  
      const cookie = cookies
        .pop()
      if (cookie) {
        cy.setCookie(cookie.name, cookie.value, {
          domain: cookie.domain,
          expiry: cookie.expires,
          httpOnly: cookie.httpOnly,
          path: cookie.path,
          secure: cookie.secure,
        })
  
        Cypress.Cookies.defaults({
          preserve: cookieName,
        })
      }
      */
    })
})