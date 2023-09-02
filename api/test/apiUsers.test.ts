import { expect } from 'chai';
import request from 'supertest';
import { Express } from 'express';
import { apiUsers } from '../src/controllers/api.users.controller'; // Importe sua função de middleware
import express from 'express';

describe('API Users Middleware', () => {
  let app: Express;

  before(() => {
    app = express();
    app.use(apiUsers);
  });

  it('should return all data when no "q" query parameter is provided', async () => {
    const response = await request(app).get('/api/users');
    expect(response.status).to.equal(200);
    //expect(response.body).to.deep.equal();
  });

  it('should return filtered data when a "q" query parameter is provided', async () => {
    const response = await request(app).get('/api/users/?q=par');
    expect(response.status).to.equal(200);
    //expect(response.body).to.deep.equal();
  });
});
