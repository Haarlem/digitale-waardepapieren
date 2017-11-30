const claim = require('../dc-iota/claim.js')
const db = require('../db.js')

module.exports = (server) => {
  server.post('/claim', async (req, res, next) => {
    var clientDid = req.body.did

    // TODO: user data should come from some server-side network (name etc)
    var data = {
      name: 'Peter Willemsen'
    }
    var mamState = await db.getMamStateByChannelName('haarlem')
    var claimed = await claim({
      data,
      mamState
    })

    res.contentType = 'json'
    res.send(claimed)
    next();
  })
}
