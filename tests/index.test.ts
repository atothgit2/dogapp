import request from 'supertest';
import { app } from "../src/app"

// beforeEach(async() => {
//   const connection = await mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
// })

describe('API tests', () => {
  it('Get dogs', () => {
    console.log("Test!!!");
    expect(1 + 2).toBe(3)
    // app.get('/dogs')
    // .expect('Content-Type', /json/)
  });
});

// https://www.youtube.com/watch?v=Ml51d87uoPo 19:55