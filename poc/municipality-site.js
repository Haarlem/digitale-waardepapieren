
// Node this code should normally run at server side and should check that the claim data is acceptable.
// The claim data is given by the subject rather than fetching it from a central register at this stage
// because in a future implementation the data source actually is at the subject him/her self.
// Fot this POC we run this client side without checking the data for ease of implementation.
function requestAttestation(claim, key) {
  // Todo: check if claim is acceptable
  // Attest claim with keyed hash using given key:
  const store = new DCIOTA(iotanode);
  const did = store.getDid(verifierseed);
  var ref = store.attest(claim, attestorseed, key);
  var result = new Object();
  result.aref = ref;
  result.adid = did;
  return result;
}

function generatePDF(key, claim, attestation) {
  window.alert(key+claim+attestation);
}

function claimAndAttest() {

  // for this use case we use a local store to make the claim. This is only a temporary store as the claim will be held by the subject
  // as a PDF file instead. In future scenario's one might think of a wallet as local store on the subjects smart phone for instance
  const store = new DCLOCAL();
  const did = store.getDid(pkey);
  const claim = '{'+
    '"@id" : "'+did+'",'+claimdata
  '}';

  // store claim to get a uuid as reference (and in the future when this is an app: a reference for later use)
  const rkey = store.claim(claim, pkey);

  // now provide the claim and rkey (used as a side key to generate a keyed hash)
  // to attestor and get in return the did of attestor and reference of attestation
  var result = requestAttestation(claim, rkey); // calls the attestor service

  // keep attestation reference and random key in an additional local claim
  const akey = store.claim('{"@id" : '+did+', "attestation" : '+result.aref+', "attestor" : '+result.adid+'}', pkey);

  // generate PDF with QR code with sidekey, claim and attestation reference info for subject to keepsafe to hand it over to a verifier at a later time
  generatePDF(rkey, store.getByReference(rkey, pkey), store.getByReference(akey, pkey);

  // close (and destroy) store... PDF is the only document with claim and attestation reference info and side key from now on

}
