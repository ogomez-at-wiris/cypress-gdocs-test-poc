class GoogleLogin {
    getEmailAddressField() {
        return cy.get('#identifierId');
    }

    getNextButton() {
        return cy.get('#identifierNext');
    }
}

export default GoogleLogin;
