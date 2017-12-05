const discipl = require('discipl-core')
const Mam = require('mam.client.js/lib/mam.node.js')

module.exports = async (obj) => {
  var { iota, mamState, data, did, rKey } = obj
  const claim = Object.assign({}, data, { "@id": did })
  Object.freeze(claim)

  console.log(iota.api.sendTransfer);
  // TODO check if have to stringify obj
  const iotaConnector = new discipl.connectors.iota(Mam, iota)
  const attestorDid = await discipl.getDid(iotaConnector, mamState)
  console.log("Attestor DID: " + attestorDid);
  var { mamState, root } = await discipl.attest(iotaConnector, mamState, claim, rKey);
  console.log("Attestion Root: " + root);
  return { root, mamState, attestorDid };
}
