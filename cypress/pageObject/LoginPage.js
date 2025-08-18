class LoginPage {
    visit() {
        cy.visit('/login'); // update this when real url is provided
    }

    fillUsername(username) {
        cy.get('input[placeholder="Enter Username"]').type(username);
    }

    fillPassword(password) {
        cy.get('input[placeholder="password"]').type(password);
    }

    clickLoginBtn() {
        cy.contains('button', 'LOGIN').click();
    }

    getErrorMessage() {
        return cy.contains('INVALID USER');
    } 
    
}
export { LoginPage };