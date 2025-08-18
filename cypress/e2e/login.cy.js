import {  LoginPage } from '../pageObjects/LoginPage';
describe('Login Page', () => {
  beforeEach(() => {
    const loginPage = new LoginPage();
    loginPage.visit();
  });

  it('validates login form components', () => {
    loginPage.fillUsername('testuser');
    loginPage.fillPassword('password123');
    loginPage.clickLoginBtn();
  });

  it('validates that user can login', () => {
    loginPage.fillUsername('testuser');
    loginPage.fillPassword('password123');
    loginPage.clickLoginBtn();
    cy.url().should('include', '/dashboard'); // update this when real url is provided
    cy.get('input[placeholder="password"]').should('exist');
    cy.contains('button', 'LOGIN').should('be.visible');
    cy.contains('If you do not have an account, contact an admin').should('be.visible');
  });

  it('validates that user can login', () => {
    loginPage.fillUsername('testuser');
    loginPage.fillPassword('password123');
    loginPage.clickLoginBtn();
    cy.url().should('include', '/dashboard'); // update this when real url is provided
    cy.contains('Welcome, testuser').should('be.visible'); // modify as needed
  });

  it('validates the error message for invalid credentials', () => {
    loginPage.fillUsername('invaliduser');
    loginPage.fillPassword('wrongpassword');
    loginPage.clickLoginBtn();
    cy.contains('INVALID USER').should('be.visible'); // auth.tsx has this negative case covered
  });

  it('validates the error message for empty login', () => {
    loginPage.clickLoginBtn();
    cy.contains('Username and password are required').should('be.visible'); // modify as needed
  });
});
