import GoogleLoginPage from './pages/google_login';

const googleLoginPage = new GoogleLoginPage();

Cypress.Commands.add('login', (username, password) => {
    cy.session('gdocs_login', () => {
        cy.visit('/');
        cy.wait(1000)
        googleLoginPage.getEmailAddressField().type(Cypress.env('googleUser'));
        // googleLoginPage.getNextButton().click()
        cy.wait(100000)  
    })
})