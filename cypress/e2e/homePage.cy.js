describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/'); // update this when real url is provided
    cy.login('testuser', 'password123'); // custom command from command.js
  });

  afterEach(() => {
    cy.get('button', 'Logout').click();
  });

  it('should display the welcome message', () => {
    cy.contains('Welcome to the Home Page').should('be.visible'); // modify as needed
  });

  it('should display the user profile link', () => {
    cy.contains('Profile').should('be.visible'); // modify as needed
  });                       

  it('should display the logout button', () => {
    cy.contains('Logout').should('be.visible'); // modify as needed
  });

  it('should display the user name', () => {
    cy.contains('testuser').should('be.visible'); // modify as needed
  });

  it('should display the favourite fruit', () => {
    cy.contains('Favourite Fruit: Apple').should('be.visible'); // modify as needed
  });

  it('should display the favourite movie', () => {
    cy.contains('Favourite Movie: Inception').should('be.visible'); // modify as needed
  });

  it('should display the favourite number', () => {
    cy.contains('Favourite Number: 42').should('be.visible'); // modify as needed
  });
});
