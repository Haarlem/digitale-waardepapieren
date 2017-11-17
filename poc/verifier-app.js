var LZUTF8 = require('lzutf8');
var fs = require('fs');
var QrCode = require('qrcode-reader');
var JIMP = require("jimp");

// change this setting to an available IOTA light node server
var iotanode = "http://p103.iotaledger.net:14700/";

var discipl = require('discipl-core');
discipl.iota.setIOTANode(iotanode);

console.log("Waardepapieren POC testscript : verify");
console.log("Reading QRcode (" + __dirname + '\\test.png)...');
var buffer = fs.readFileSync(__dirname + '\\test.png');
JIMP.read(buffer, function(err, image) {
    if (err) {
        console.error(err);
    }

    var qr = new QrCode();
    qr.callback = function(err, value) {

        if (err) {
            console.error(err);
        }
        debugger;
        var data = LZUTF8.decompress(LZUTF8.decodeBase64(value.result));
        console.log("Read the following information from QR code:");
        var key = data.slice(0,data.indexOf(','));
        console.log("Key: "+key);
        var claimattest = data.slice(data.indexOf(',')+1).split('},{');
        var claim = claimattest[0]+'}';
        console.log("Claim: "+claim);
        var attest = JSON.parse('{'+claimattest[1]);
        console.log("Attestation reference: "+attest.attestation);
        console.log("Attestator DID: "+attest.attestor);

        if(discipl.iota.verify(attest.attestation, attest.attestor, claim, key)) {
          console.log("Verified!");
        } else {
          console.log("Could not verify this claim to be legimate...");
        }

    };
    qr.decode(image.bitmap);
});
