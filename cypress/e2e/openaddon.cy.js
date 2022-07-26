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
  const socialLoginOptions = {
    username: Cypress.env['googleUser'],
    password: Cypress.env['google_Password'],
    loginUrl: 'https://docs.google.com',
    headless: false,
    logs: false,
    isPopup: true,
    // postLoginSelector: ".unread-count",
  }

  return cy
    .task("GoogleSocialLogin", socialLoginOptions)
    .then(({ cookies }) => {
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
    })
})