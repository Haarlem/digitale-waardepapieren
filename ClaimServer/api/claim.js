const claim = require('../dc-iota/claim.js')
const db = require('../db.js')
const discipl = require('discipl-core')

var knex = db.knex

module.exports = (server, iota) => {
  server.post('/claim', async (req, res, next) => {
    var {
      did,
      rKey
    } = req.body
    var claimed

    knex.transaction(function(trx) {
        // TODO: user data should come from some server-side network (name etc)
        var data = {
          name: 'Peter Willemsen'
        }
        const channelName = 'haarlem'
        const iotaConnector = new discipl.connectors.iota(iota)

        knex('channels')
          .transacting(trx)
          .where('name', '=', channelName)
          .then(async (rows) => {
            var channel = rows[0]
            var mamState = discipl.deserialize(iotaConnector, channel.mamState)

            claimed = await claim({
              rKey,
              did,
              iota,
              data,
              mamState
            })
            return knex('channels')
              .transacting(trx)
              .where('name', '=', channelName)
              .update({
                mamState: discipl.serialize(iotaConnector, claimed.mamState)
              })
          })
          .then(trx.commit).catch(trx.rollback)
      })
      .then(function(resp) {
        res.contentType = 'json'
        res.send({ root: claimed.root, attestorDid: claimed.attestorDid })
        next();
      })
      .catch(function(err) {
        console.error(err);
      });
  })
}