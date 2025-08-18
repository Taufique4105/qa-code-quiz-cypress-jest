import { LoginPage } from "../pageObject/LoginPage";
import { HomePage } from "../pageObject/HomePage"; 
describe('Home Page', () => {
  beforeEach(() => {
    const loginPage = new LoginPage();
    const homePage = new HomePage();
    loginPage.fillUsername('testuser');
    loginPage.fillPassword('password123');
    loginPage.clickLoginBtn();
  });

  afterEach(() => {
    homePage.getLogoutButton().click();
  });

  it('validates the welcome message', () => {
    homePage.getWelcomeMessage().should('be.visible');
  });

  it('validates the user profile link', () => {
    homePage.getUserProfileLink().should('be.visible');
  });

  it('validates the logout button', () => {
    homePage.getLogoutButton().should('be.visible');
  });

  it('validates the user name', () => {
    homePage.getUserName().should('have.text', 'testuser');
  });

  it('validates the favourite fruit', () => {
    homePage.getFavouriteFruit().should('have.text', 'Apple');
  });

  it('validates the favourite movie', () => {
    homePage.getFavouriteMovie().should('have.text', 'Inception');
  });

  it('validates the favourite number', () => {
    homePage.getFavouriteNumber().should('have.text', '42');
  });
});
