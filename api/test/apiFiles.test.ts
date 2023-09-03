import chai from 'chai';
import { Request, Response } from 'express';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import api from '../src/controllers/api.files.controller';

import utils from '../src/utils/write.file';

chai.use(sinonChai);
const expect = chai.expect;

const returnBufferFile =
  'name,city,country,favorite_sport\r\nJohn Doe,New York,USA,Basketball\r\nJane Smith,London,UK,Football\r\nMike Johnson,Paris,France,Tennis\r\nKaren Lee,Tokyo,Japan,Swimming\r\nTom Brown,Sydney,Australia,Running\r\nEmma Wilson,Berlin,Germany,Basketball';

const mock = [
  {
    'name': 'John Doe',
    'city': 'New York',
    'country': 'USA',
    'favorite_sport': 'Basketball'
  },
  {
    'name': 'Jane Smith',
    'city': 'London',
    'country': 'UK',
    'favorite_sport': 'Football'
  },
  {
    'name': 'Mike Johnson',
    'city': 'Paris',
    'country': 'France',
    'favorite_sport': 'Tennis'
  },
  {
    'name': 'Karen Lee',
    'city': 'Tokyo',
    'country': 'Japan',
    'favorite_sport': 'Swimming'
  },
  {
    'name': 'Tom Brown',
    'city': 'Sydney',
    'country': 'Australia',
    'favorite_sport': 'Running'
  },
  {
    'name': 'Emma Wilson',
    'city': 'Berlin',
    'country': 'Germany',
    'favorite_sport': 'Basketball'
  }
];

describe('API files', function () {
  it('should handle a valid CSV file upload', async function () {

    const req = {
      file: {
        originalname: {
          endsWith: sinon.stub().returns(true),
        },
        buffer: {
          toString: sinon.stub().returns(returnBufferFile)
        }
      }
    } as unknown as Request;

    const res: { status?: sinon.SinonStub<unknown[], unknown>, json?: sinon.SinonStub<unknown[], unknown> } = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);

    //sinon.stub(utils, 'writeFile').resolves([]);

    await api.apiFiles(req, res as unknown as Response);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWithExactly(mock);
  });

  it('should handle a invalid CSV file upload', async function () {

    const req = {
      file: {
        originalname: {
          endsWith: sinon.stub().returns(false),
        },
        buffer: {
          toString: sinon.stub().returns(returnBufferFile)
        }
      }
    } as unknown as Request;

    const res: { status?: sinon.SinonStub<unknown[], unknown>, json?: sinon.SinonStub<unknown[], unknown> } = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);

    sinon.stub(utils, 'writeFile').resolves([]);

    await api.apiFiles(req, res as unknown as Response);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWithExactly({ message: 'Invalid extension' });
  });
});
