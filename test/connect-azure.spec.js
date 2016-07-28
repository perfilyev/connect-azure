const expect = require('chai').expect;
const session = require('express-session');
const AzureStore = require('../src/azure-store')(session);

const store = new AzureStore({ account: 'azure account', key: 'top secret key' });
const userSession = { coockie: 'cookies!!!' };

describe('AzureStore spec', () => {
  it('unknown session', done => {
    store.get('sid', (err, savedSession) => {
      expect(savedSession).to.be.equal(null);
      done();
    });
  });

  it('set session', done => {
    store.set('sid', userSession, (err, result) => {
      expect(result).to.be.equal(userSession);
      done();
    });
  });

  it('retrieve session', done => {
    store.get('sid', (err, result) => {
      expect(result).to.deep.equal(userSession);
      done();
    });
  });
});
