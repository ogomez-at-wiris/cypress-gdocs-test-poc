Cypress.Commands.add('loginToGoogleDocs', () => {
    cy.session('googleDocsSession', () => {
        cy.task("loginToGoogleDocs", {
            username: Cypress.env()['googleUser'],
            password: Cypress.env()['googlePassword'],
        })
            .then((cookies) => {
                cy.clearCookies()

                const cookie = cookies
                    .forEach((cookie) => {
                        cy.setCookie(cookie.name, cookie.value, {
                            domain: cookie.domain,
                            expiry: cookie.expires,
                            httpOnly: cookie.httpOnly,
                            path: cookie.path,
                            secure: cookie.secure,
                        })
                    })
            });
    })
})
