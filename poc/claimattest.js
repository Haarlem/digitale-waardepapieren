var QRCode = require('qrcode');
var LZUTF8 = require('lzutf8');

console.log("Waardepapieren POC testscript : claim and attest");

// In this POC the claimdata (which should be retrieved from the central register through the municipality) is hard coded as (partial) JSON-LD
const claimdata = '"name":"John Doe","Street":"John Doestreet 7","Zipcode":"1234AA","City":"Haarlem","SSN":"123456789"';

// In this POC the private key is just some random password
const pkey = "JSdhshshdi7S8bYHS";

const attestorseed = "VERIHMSDNLKS9SDS99WQTWQEWEMNBNDSLFDHIQBQVDQBFFFLSHJSD99SDBW9SDDKEWHB9ETWYVCXNB9SU";

const attestorChannel = "";

// change this setting to an available IOTA light node server
var iotanode = "http://p103.iotaledger.net:14700/";

var discipl = require('discipl-core');
discipl.iota.setIOTANode(iotanode);

// The claim data is given by the subject rather than fetching it from a central register at this stage
// because in a future implementation the data source actually is at the subject him/her self.
// For this POC we run this without checking the data for ease of implementation.
async function requestAttestation(claim, key) {
  // Todo: check if claim actually is acceptable
  // Attest claim with keyed hash using given key:
  const did = discipl.iota.getDid(attestorseed);
  console.log("Attestor DID: "+did);
  var ref = await discipl.iota.attest(claim, attestorseed, key);
  console.log("Attestion Reference: "+ref);
  var result = new Object();
  result.aref = ref;
  result.adid = did;
  return result;
}

function generateQR(key, claim, attestation) {
  var jsonsrc = key+','+claim+','+attestation;
  var src = LZUTF8.encodeBase64(LZUTF8.compress(jsonsrc));
  console.log("QRCode source: "+jsonsrc);
  console.log("QRCode compressed source: "+src);
  console.log("QRCode compressed source size: "+src.length+" bytes");
  QRCode.toFile('test.png', src, {
    color: {
      dark: '#000',  // Black dots
      light: '#FFF' // White background
    }
  }, function (err) {
    if (err) throw err
      console.log('saved as QR code : test.png');
  })
}

async function claimAndAttest() {
  // for this POC we run this server side. In a Self Sovereign Identity platform the
  // creation and local storage of the claim should actually be done by the subject at client side.
  // for this use case we use a local store to make the claim. This is only a temporary store as the claim will be held by the subject
  // as a QR code in for instance a PDF file instead. In future scenario's one might think of a wallet as local store on the subjects smart phone for instance
  const did = discipl.local.getDid(pkey);
  const claim = '{'+
    '"@id" : "'+did+'",'+claimdata+
  '}';
  console.log('Claim: '+claim);

  // store claim to get a uuid as reference (and in the future when this is an app: a reference for later use)
  const rkey = discipl.local.claim(claim, pkey);
  console.log('Key: '+rkey);

  // now provide the claim and rkey (used as a side key to generate a keyed hash)
  // to attestor and get in return the did of attestor and reference of attestation
  var result = await requestAttestation(claim, rkey); // calls the attestor service

  // keep attestation reference and random key in an additional local claim
  const akey = discipl.local.claim('{"@id" : "'+did+'", "attestation" : "'+result.aref+'", "attestor" : "'+result.adid+'"}', pkey);

  // generate QR code with sidekey, claim and attestation reference info for subject to keepsafe to hand it over to a verifier at a later time
  generateQR(rkey, discipl.local.getByReference(rkey, did), discipl.local.getByReference(akey, did));

  // close (and destroy) store... PDF is the only document with claim and attestation reference info and side key from now on

}

claimAndAttest();
