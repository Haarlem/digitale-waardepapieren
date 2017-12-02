const seedGen = require("./helpers/seedGen.js")
const discipl = require('discipl-core');

var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: "./mam.sqlite"
  }
});

module.exports = {
  knex,
  async getSettings() {
    return new Promise(function(resolve, reject) {
      knex('settings').limit(1).then((settings) => {
        return resolve(settings[0] || null);
      })
    });
  },
  async getChannelByName(name) {
    return new Promise(function(resolve, reject) {
      knex('channels')
        .where('name', '=', name)
        .then((rows) => {
          if(rows.length > 0) {
            resolve(rows[0])
          }
          else {
            resolve(null)
          }
        })
    });
  },
  async getMamStateByChannelName(iota, name) {
    const iotaConnector = new discipl.connectors.iota(iota)
    var channel = await this.getChannelByName(name)
    return discipl.deserialize(iotaConnector, channel.mamState)
  },
  async newChannel(obj) {
    const seed = await seedGen()
    const iotaConnector = new discipl.connectors.iota(obj.iota)
    var mamState = discipl.initState(iotaConnector, seed)
    console.log(mamState);
    const did = await discipl.getDid(iotaConnector, mamState)

    return new Promise(function(resolve, reject) {
      knex('channels').insert({
        name: obj.name,
        mamState: discipl.serialize(iotaConnector, mamState),
        did
      }).then((e, r) => {
        resolve();
      });
    });
  },
  async hasTable(name) {
    return new Promise(function(resolve, reject) {
      knex.schema.hasTable(name).then(function(exists) {
        resolve(exists)
      });
    });
  },
  async updateState(name, mamState) {
    return new Promise(function(resolve, reject) {
      knex('channels')
      .where('name', '=', name)
      .update({
        mamState: JSON.stringify(mamState)
      })
      .then(() => {
        resolve()
      })
    });
  },
  async init() {
    var shouldInit =
      !(await this.hasTable('channels') && await this.hasTable('settings'))

    return new Promise(function(resolve, reject) {
      if(!shouldInit) {
        return resolve();
      }
      knex.schema.createTableIfNotExists('channels', function (table) {
        table.increments()
        table.text('mamState')
        table.string('did', 255).unique()
        table.string('name', 16).index().unique()
        table.timestamps()
      }).then(() => {
        knex.schema.createTableIfNotExists('settings', (table) => {
          table.increments();
          table.string('iota_provider', 255).defaultTo('http://p103.iotaledger.net:14700/');
        }).then(() => {
          knex('settings').insert({

          }).then(() => {
            resolve();
          });
        });
      });
    });
  }
};
