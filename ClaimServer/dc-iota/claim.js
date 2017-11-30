const discipl = require('discipl-core')

module.exports = async (obj) => {
  var { mamState, data } = obj

  const did = await discipl.iota.getDid(mamState.seed)
  debug("Attestor DID: " + did);
  var ref = await discipl.iota.attest(claim, attestorseed, key);
  mamState = discipl.iota.getState();
  debug("Attestion Reference: " + ref);
  var result = new Object();
  result.aref = ref;
  result.adid = did;
  return result;
}
