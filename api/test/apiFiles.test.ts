import { expect } from 'chai';
import request from 'supertest';
import { Express } from 'express';
import { apiFiles } from '../src/controllers/api.files.controller'; // Importe sua função de middleware
import express from 'express';

describe('API Files Middleware', () => {
  let app: Express;

  before(() => {
    app = express();
    app.use(apiFiles);
  });

  it('should handle a valid CSV file upload', async () => {
    const fakeFile = {
      originalname: 'valid.csv',
      buffer: Buffer.from('John Doe, New York, USA, Basketball\r\nJohn Doe, New York, USA, Basketball'),
    };
    //console.log(fakeFile.buffer);

    const response = await request(app)
      .post('/api/files')
      .attach('file', fakeFile.buffer, fakeFile.originalname);

    expect(response.status).to.equal(200);
    //expect(response.body).to.deep.equal();

  });


});





