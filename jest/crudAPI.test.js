// Jest + SuperTest for testing the mocked API
const request = require('supertest');
const app = require('../mockedAPI/app');
const fs = require('fs');
const { text } = require('stream/consumers');

describe('API Tests', () => {
    beforeEach(() => {
        // Reset the account data before each test
        fs.writeFileSync('./storage/accounts.json', JSON.stringify({}, null, 2));
    });
    //  Unique username function for each test 
    function getUniqueUsername(){
        return `testuser_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
    }
    // Validate user create api
    test('create a new user', async () => {
        const username = getUniqueUsername()
        const response = await request(app)
            .post('/user')
            .send({
                username,
                name: 'Miraz',
                password: 'password123',
                favouriteFruit: 'Apple',
                favouriteMovie: 'Inception',
                favouriteNumber: 34
            });
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe("Account Created");  
    });

    // Validate duplicate user creation 
    test('create an existing user', async () => {
        // First create the user

        const username = getUniqueUsername()
        await request(app)
            .post('/user')
            .send({
                username, 
                name: 'Miraz',
                password: 'password123',
                favouriteFruit: 'Apple',
                favouriteMovie: 'Inception',
                favouriteNumber: 34
            });

        // Now try to create the same user again
        const response = await request(app)
            .post('/user')
            .send({
                username, 
                name: 'Miraz',
                password: 'password123',
                favouriteFruit: 'Apple',
                favouriteMovie: 'Inception',
                favouriteNumber: 34
            });
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe("Account Already Exists");
    });

    // // Validate user create api without data
    // test('create user with no data', async () => {
    //     const response = await request(app)
    //         .post('/user')
    //         .send({}); // sending no data
    //    // expect(response.statusCode).toBe(400);
    //     expect(response.text).toBe("Invalid user data");
    // });

    // Validate string assertion for GET API
    test('GET returns Backend API', async () => {
        const response = await request (app).get('/'); 
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe("Backend API");   
    });

    // Validate user update
    test('update the user', async () => {
        // Create a user first
        const username = getUniqueUsername();
        await request(app)
            .post('/user')
            .send({
                username,
                name: 'David',
                password: 'password123',
                favouriteFruit: 'Tangerine',
                favouriteMovie: 'Roman Holiday',
                favouriteNumber: 9
            });

        const response = await request(app)
            .put(`/user?username=${username}`)
            .send({
                name: 'Millar',
                password: 'password321',
                favouriteFruit: 'Banana',
                favouriteMovie: 'Interstellar',
                favouriteNumber: 18
            });
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe("Account Updated");
    });

    //Validate user update with a non-existing user
    test('update a non-existing user', async () => {
        const username = getUniqueUsername();
        const response = await request(app)
            .put(`/user?username=${username}`)
            .send({
                name: 'Tom',
                password: 'password321',
                favouriteFruit: 'Mango',
                favouriteMovie: 'The Tourist',
                favouriteNumber: 1
            });
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe("Account Does NOT Exist");
    });

    // Validate user delete
    test('delete the user', async () => {
        // Create a user first
        const username = getUniqueUsername();
        await request(app)
            .post('/user')
            .send({
                username,
                name: 'David',
                password: 'password123',
                favouriteFruit: 'Tangerine',
                favouriteMovie: 'Roman Holiday',
                favouriteNumber: 9
            });

        const response = await request(app)
            .delete(`/user?username=${username}`);
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe("Account Deleted");
    });

    // Validate user deletion with non-existing user
    test('delete a non-existing user', async () => {
        const username = getUniqueUsername();
        const response = await request(app)
            .delete(`/user?username=${username}`);
        //expect(response.statusCode).toBe(404); // backend returns 200 
        expect(response.text).toBe("Account Does Not Exist");
    });
});