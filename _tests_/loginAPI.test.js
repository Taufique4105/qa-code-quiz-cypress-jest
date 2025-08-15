// Jest + Supertest for testing the mocked API
const request = require('supertest');
const app = require('../mockedAPI/app'); // Adjust the path as necessary
const fs = require('fs');

describe('Login API Tests', () => {
    beforeEach(() => {
        // Reset the account data before each test
        fs.writeFileSync('./storage/accounts.json', JSON.stringify({}, null, 2));
    });
    
    test('create a new user', async () => {
        const response = await request(app)
            .post('/user')
            .send({
                username: 'testuser', 
                name: 'Miraz',
                password: 'password123',
                favouriteFruit: 'Apple',
                favouriteMovie: 'Inception',
                favouriteNumber: 34
            });
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe("Account Created");  
    });
});