const debug = require('debug')('claimattest');
var CryptoJS = require('crypto-js');
var LZUTF8 = require('lzutf8');
var fs = require('fs');

console.log("Waardepapieren POC testscript : verify");

// change this setting to an available IOTA light node server
var iotanode = "http://p103.iotaledger.net:14700/";
var discipl = require('discipl-core');
discipl.iota.setIOTANode(iotanode);

const verifyData = function (datFile) {

  console.log("Reading QRcode source ("+datFile+")...");

  var src = fs.readFileSync(datFile,{encoding:'utf8'});
  var data = LZUTF8.decompress(LZUTF8.decodeBase64(src));

  console.log("Read the following information:");
  var key = data.slice(0,data.indexOf(','));
  console.log("Key: "+key);
  var claimattest = data.slice(data.indexOf(',')+1).split('},{');
  var claim = claimattest[0]+'}';
  console.log("Claim: "+claim);
  var attest = JSON.parse('{'+claimattest[1]);
  console.log("Attestation reference: "+attest.attestation);
  console.log("Attestator DID: "+attest.attestor);

  discipl.iota.verify(attest.attestation, attest.attestor, claim, key).then(function(result) {
    if(result == true) {
      console.log("Verified!");
    } else {
      console.log("Could not verify this claim to be legimate...");
    }
  });
}

verifyData(process.argv[2]);
