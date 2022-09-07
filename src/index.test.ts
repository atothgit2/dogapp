const request = require('supertest');
// const app = require('./index');
import { app } from "./index"

describe('API tests', () => {
  it('Get dogs', () => {
    console.log("Test!!!");
    // return request(app)
    // .get('/dogs')
    // .expect('Content-Type', /json/)
  });
})