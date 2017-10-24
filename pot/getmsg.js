const IOTA = require('iota.lib.js');

console.log("Hello PoT");

// Create IOTA instance directly with provider
var iota = new IOTA({
    'provider': '<your node ip:port>'
});

// now you can start using all of the functions
//iota.api.getNodeInfo(function(error, success) {
//    if (error) {
//        console.error(error);
//    } else {
//        console.log(success);
//    }
//})

var Crypto = require('iota.crypto.js');
const MAM = require('./node_modules/mam.client.js/lib/mam');
const MerkleTree = require('./node_modules/mam.client.js/lib/merkle');
const Encryption = require('./node_modules/mam.client.js/lib/encryption');

const seed = 'PFVHAVVYJPLRYXSWVHFQTFYPWLARUSGQJYHZLHNUHHAPNSHPKKQUFLUNUAREUKLSNXPEVFBNGXVXZWCD';

const channelKeyIndex = 3;

//const channelKey = Crypto.converter.trytes(MAM.channelKey(Encryption.hash(Encryption.increment(Crypto.converter.trits(seed.slice()))), channelKeyIndex));
const channelKey = Crypto.converter.trytes(Encryption.hash(Encryption.increment(Crypto.converter.trits(seed.slice()))));

/* attempt doing it on node without MAM module */
iota.api.findTransactionObjects({'addresses' : [channelKey]}, function(e, result) {
  if(e == undefined) {
    console.log('got something...');
    const message = result.map(function (tx) { return tx.signatureMessageFragment;});
    const output = MAM.parse({'key': channelKey, 'message': message, 'tag': result[0].tag});
    const asciiMessage = iota.utils.fromTrytes(output.message);
    console.log(asciiMessage);
  }
});

/* the when using a node with the MAM extension, following the actual example of in the mam.client.js project on github
const start = 3;

const count = 4;

const security = 1;



const tree0 = new MerkleTree(seed, start, count, security);



const root = tree0.root.hash.toString();



iota.api.sendCommand({

    command: "MAM.getMessage",

    channel: MAM.messageID(channelKey)

}, function(e, result) {

    if(e == undefined) {

        result.ixi.map(mam => {

            const output = MAM.parse({key: channelKey, message: mam.message, tag: mam.tag});

            const asciiMessage = iota.utils.fromTrytes(output.message);

            if (root === output.root) {

                console.log("Public key match for " + root);

            }

            console.log("received: " + asciiMessage);

        });



    }

});
*/
