const claim = require('../dc-iota/claim.js')
const db = require('../db.js')

module.exports = (server, iota) => {
  server.post('/claim', async (req, res, next) => {
    var { did, rKey } = req.body

    // TODO: user data should come from some server-side network (name etc)
    var data = {
      name: 'Peter Willemsen'
    }
    var mamState = await db.getMamStateByChannelName(iota, 'haarlem')
    var claimed = await claim({
      rKey,
      did,
      iota,
      data,
      mamState
    })
    db.updateState('haarlem', mamState)
    res.contentType = 'json'
    res.send(claimed)
    next();
  })
}
