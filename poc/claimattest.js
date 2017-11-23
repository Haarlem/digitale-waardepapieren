const debug = require('debug')('claimattest');
var CryptoJS = require('crypto-js');
var QRCode = require('qrcode');
var LZUTF8 = require('lzutf8');
var fs = require('fs');

console.log("Waardepapieren POC testscript : claim and attest");

// In this POC the claimdata (which should be retrieved from the central register through the municipality) is hard coded as (partial) JSON-LD
const claimdata = '"name":"John Doe","Street":"John Doestreet 7","Zipcode":"1234AA","City":"Haarlem","SSN":"123456789"';

// In this POC the private key (of local client) is just some random password. Should be different for different clients of course
const pkey = "JSdhshshdi7S8bYHS";

// set seed to a unique seed of 81 characters as private key the attestor's channel will be bound to. The DID will include an address (can be seen as public key)
// to access the first message in the channel.
const attestorseed = "VERIHMSDNLKS9SDS99WQTWQEWEMNBNDSLFDHIQBQVDQBFFFLSHJSD99SDBW9SDDKEWHB9ETWYVCXNB9US";

const attestorChannel = "";

// change this setting to an available IOTA light node server
var iotanode = "http://p103.iotaledger.net:14700/";
var mamState = undefined;
var discipl = require('discipl-core');

const logState = () => {
  debug('logging state in state.tmp');
  fs.open('state.tmp','w',(err, fd) => {
    if(err) throw err;
    fs.write(fd, JSON.stringify(mamState), 0, 'utf8', (err2, w, s) => {
      if(err2) throw err2;
    });
  });
}

const rememberState = () => {
  try {
    mamState = JSON.parse(fs.readFileSync('state.tmp',{encoding:'utf8'}));
    debug('Read mamState from state.tmp='+mamState);
    discipl.iota.setState(mamState);
  }
  catch(e) {
    debug('No previous state found.');
    mamState = undefined;
  }
}

rememberState();
discipl.iota.setIOTANode(iotanode);

// The claim data is given by the subject rather than fetching it from a central register
// because in a future implementation the data source actually is at the subject him/her self.
// For this POC we run this without checking the data against the attestor's own records
// for ease of implementation.
async function requestAttestation(claim, key) {
  // Todo: check if claim actually is acceptable
  // Attest claim with keyed hash using given key:
  const did =await discipl.iota.getDid(attestorseed);
  debug("Attestor DID: "+did);
  var ref = await discipl.iota.attest(claim, attestorseed, key);
  mamState = discipl.iota.getState();
  debug("Attestion Reference: "+ref);
  var result = new Object();
  result.aref = ref;
  result.adid = did;
  return result;
}

function generateQR(key, claim, attestation) {
  var jsonsrc = key+','+claim+','+attestation;
  var src = LZUTF8.encodeBase64(LZUTF8.compress(jsonsrc));
  console.log("QRCode source: "+jsonsrc);
  debug("QRCode compressed source: "+src);
  debug("QRCode compressed source size: "+src.length+" bytes");
  fs.writeFileSync('attestedClaim.dat', src, {encoding:'utf8'});
  console.log('Written compressed source in attestedClaim.dat...');
  var segs = [
    { data: src, mode: 'byte' }
  ];
  QRCode.toFile('test.png', segs, {
    color: {
      dark: '#0000',  // Black dots
      light: '#FFFF' // White background
    },
    type: 'png'
  }, function (err) {
    if (err) throw err;
    console.log('saved as QR code : test.png');
    console.log('Scanning the QR code (test.png) should give you the contents in attestedClaim.dat.');
    console.log('Try it out at webqr.com');
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
  debug('Claim: '+claim);

  // store claim to get a uuid as reference (and in the future when this is an app: a reference for later use)
  const rkey = discipl.local.claim(claim, pkey);
  debug('Key: '+rkey);

  // now provide the claim and rkey (used as a side key to generate a keyed hash)
  // to attestor and get in return the did of attestor and reference of attestation
  var result = await requestAttestation(claim, rkey); // calls the attestor service

  // keep attestation reference and random key in an additional local claim
  const akey = discipl.local.claim('{"@id" : "'+did+'", "attestation" : "'+result.aref+'", "attestor" : "'+result.adid+'"}', pkey);

  // generate QR code with sidekey, claim and attestation reference info for subject to keepsafe to hand it over to a verifier at a later time
  generateQR(rkey, discipl.local.getByReference(rkey, did), discipl.local.getByReference(akey, did));

  // close (and destroy) store... PDF is the only document with claim and attestation reference info and side key from now on

}

const execute = async () => {
  await claimAndAttest();
  logState();
}

execute();
