const request = require('supertest');
import app from '../src/index';

describe("POST", () => {
    it("should return server is up", async (done) => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200)
        expect(response.body.message).toBe('Server is running')
        done()
    });
})