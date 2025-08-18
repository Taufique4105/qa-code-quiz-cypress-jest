import { LoginPage } from "../pageObject/LoginPage";
import { HomePage } from "../pageObject/HomePage"; 
describe('Home Page', () => {
  beforeEach(() => {
    const loginPage = new LoginPage();
    loginPage.visit();
    loginPage.fillUsername('testuser');
    loginPage.fillPassword('password123');
    loginPage.clickLoginBtn();
  });

  afterEach(() => {
    const homePage = new HomePage();
    homePage.getLogoutButton().click();
  });

  it('validates the welcome message', () => {
    const homePage = new HomePage();
    homePage.getWelcomeMessage().should('be.visible');
  });

  it('validates the user profile link', () => {
    const homePage = new HomePage();
    homePage.getUserProfileLink().should('be.visible');
  });

  it('validates the logout button', () => {
    const homePage = new HomePage();
    homePage.getLogoutButton().should('be.visible');
  });

  it('validates the user name', () => {
    const homePage = new HomePage();
    homePage.getUserName().should('be.visible');
  });

  it('validates the favourite fruit', () => {
    const homePage = new HomePage();
    homePage.getFavouriteFruit().should('be.visible');  
  });

  it('validates the favourite movie', () => {
    const homePage = new HomePage();
    homePage.getFavouriteMovie().should('be.visible');
  });

  it('validates the favourite number', () => {
    const homePage = new HomePage();
    homePage.getFavouriteNumber().should('be.visible');
  });
});
