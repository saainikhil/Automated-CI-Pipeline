const request = require('supertest');
const server = require('../src/app');

afterAll(() => server.close());

test('responds with hello', async () => {
  const res = await request(server).get('/');
  expect(res.text).toMatch(/Hello from CI sample app/);
});
