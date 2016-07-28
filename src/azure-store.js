const azure = require('azure-storage');

module.exports = connect => class AzureSessionStore extends connect.Store {
  constructor({ account, key }) {
    super();
    this.tableService = azure.createTableService(account, key);
    this.tableService.createTableIfNotExists('sessions', () => {});
  }

  get(sid, cb) {
    this.tableService.retrieveEntity('sessions', sid, '1', (err, result) => {
      cb(null, err ? null : JSON.parse(result.value._));
    })
      ;
  }

  destroy(sid, cb) {
    this.tableService.deleteEntity('sessions', this.getEntity(sid), cb);
  }

  set(sid, session, cb) {
    const entity = Object.assign(
      {},
      this.getEntity(sid),
      { value: { _: JSON.stringify(session) } });

    this.tableService.insertOrReplaceEntity('sessions', entity, err =>
        cb(err, session));
  }

  getEntity(sid) {
    return ({
      PartitionKey: { _: sid },
      RowKey: { _: '1' },
    });
  }
};
