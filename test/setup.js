const sinon = require('sinon');
const proxyquire = require('proxyquire').noCallThru();

const sessions = new Map();

const insertOrReplaceEntity = (table, { PartitionKey: { _: sid }, value }, cb) => {
  sessions.set(sid, { value });
  cb(null);
};

const retrieveEntity = (table, sid, row, cb) => {
  const session = sessions.get(sid);
  cb(session ? null : 'no session', session);
};

const tableServiceStub = {
  createTableIfNotExists: sinon.stub(),
  insertOrReplaceEntity,
  retrieveEntity,
};

const azureStub = {
  createTableService: sinon.stub().returns(tableServiceStub),
};

proxyquire('../src/azure-store', {
  'azure-storage': azureStub,
});
