const discipl = require('discipl-core')

module.exports = async (obj) => {
  var { iota, mamState, data, did, rKey } = obj
  const claim = Object.assign({}, data, { "@id": did })
  Object.freeze(claim)

  console.log(iota.api.sendTransfer);
  const iotaConnector = new discipl.connectors.iota(iota)
  const attestorDid = await discipl.getDid(iotaConnector, mamState)
  console.log("Attestor DID: " + attestorDid);
  var { mamState, root } = await discipl.attest(iotaConnector, mamState, claim, rKey);
  console.log("Attestion Root: " + root);
  var result = new Object();
  result.aref = root;
  result.adid = attestorDid;
  return result;
}
