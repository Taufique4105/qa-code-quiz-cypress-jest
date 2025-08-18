class HomePage {
    visit() {
        cy.visit('/home'); // update this when real url is provided
    }

    getWelcomeMessage() {
        return cy.contains('Welcome to the Home Page');
    }
    getUserProfileLink() {
        return cy.contains('Profile');
    }
    getLogoutButton() {
        return cy.contains('LOG OUT');
    }
    getUserName() {
        return cy.get('.user-name'); // update the actual selector as needed
    }
    getFavouriteFruit() {
        return cy.contains('Favourite Fruit: $fruit');d
    }
    getFavouriteMovie() {
        return cy.contains('Favourite Movie: $movie'); 
    }
    getFavouriteNumber() {
        return cy.contains('Favourite Number: $number'); 
    }
}

export { HomePage };