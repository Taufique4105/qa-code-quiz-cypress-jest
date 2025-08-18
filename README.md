# QA Testing Quiz

Refactor index.js to move app routes to a seperate file (app.js) so that only server starts in index.js
Install Dependencies (jest, supertest, ts-test, @type/jest, @type/supertest)
Jest is already configured. 

Install supertest with command : 
-- npm install --save-dev jest supertest

Create basic POST API successful testcase script.
Refactored node_module/formidable/index.cjs because 'node:fs' couldn't be found 

Run tests with command : 
-- npx jest

Create more scripts for successful and negative cases for CRUD APIs
Run an individual test function with command : 
-- npx jest -t 'test fucntion name'

Install cypress with command : 
-- npm install cypress --save-dev
-- npx cypress open

Create login.cy.js to write scripts to validate login flow. 
Create homePage.cy.js to write scripts to validate homepage components based on user data.
Create a custom command 'login' in support/command.js ; which is a hookup for each test in homepage.

Create Page Object Model (POM) for LoginPage and HomePage
Update test script based on POM in both login.cy.js and homePage.cy.js
Comment out custom command

Run e2e test functions with command :
-- npx cypress run --spec cypress/e2e/login.cy.js

Make sure real URL and selctors are modified, also check all assertions are matched. 