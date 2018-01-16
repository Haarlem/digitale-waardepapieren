const discipl = require('discipl-core')
const Mam = require('mam.client.js/lib/mam.node.js')

module.exports = async (obj) => {
  var { iota, mamState, data, did } = obj
  const iotaConnector = new discipl.connectors.iota(Mam, iota)
  const attestorDid = await discipl.getDid(iotaConnector, mamState)
  console.log("Attestor DID: " + attestorDid);

  var { mamState, message, attachResult } = await discipl.attest(iotaConnector, mamState, data, did);
  var root = message.root;
  // DELETE state from message (otherwise we leak the seed from the municipality, since we send message to the user for PoW) 
  delete message.state
  console.log("Attestion Root: " + root);
  return { message, mamState, attestorDid, attachResult };
}
