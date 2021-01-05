const app = require('../src/app');
const { API_TOKEN } = require('../src/config');
const expect = require('chai').expect;
const request = require('supertest');

describe('App', () => {
  it('GET / responds with 200', () => {
    return supertest(app)
      .get('/')
      .set({ 'Authorization': `Bearer ${API_TOKEN}` })
      .expect(200)
  })
})

describe('App', () => {
  it('POST / responds with 200', () => {
    return supertest(app)
      .post('/')
      .set({ 'Authorization': `Bearer ${API_TOKEN}` })
      .query({author: 'test'})
      .expect(200)
  })
})