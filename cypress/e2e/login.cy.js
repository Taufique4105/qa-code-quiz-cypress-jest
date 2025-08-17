describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('/') // update this when real url is provided
  });

  it('should display a login form', () => {
    cy.get('input[placeholder="Enter Username"]').should('exist');
    cy.get('input[placeholder="password"]').should('exist');
    cy.contains('button', 'LOGIN').should('be.visible');
    cy.contains('If you do not have an account, contact an admin').should('be.visible');
  });

  it('should allow user to login', () => {
    cy.get('input[placeholder="Enter Username"]').type('testuser');
    cy.get('input[placeholder="password"]').type('password123');
    cy.contains('button', 'LOGIN').click();
    cy.url().should('include', '/dashboard'); // update this when real url is provided
    cy.contains('Welcome, testuser').should('be.visible'); // modify as needed
  });

  it('should show error on invalid login', () => {
    cy.get('input[placeholder="Enter Username"]').type('invaliduser');
    cy.get('input[placeholder="password"]').type('wrongpassword');
    cy.contains('button', 'LOGIN').click();
    cy.contains('Username or password is incorrect').should('be.visible'); // modify as needed
  });
  
  it('should show error on empty login', () => {
    cy.contains('button', 'LOGIN').click();
    cy.contains('Username and password are required').should('be.visible'); // modify as needed
  });
});
