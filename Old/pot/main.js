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


const seed = 'PFVHAVVYJPLRYXSWVHFQTFYPWLARUSGQJYHZLHNUHHAPNSHPKKQUFLUNUAREUKLSNXPEVFBNGXVXZWCKD';
const message = "Hello from Haarlem - Waardepapieren test channel";
const channelKeyIndex = 5;
const channelKey = Crypto.converter.trytes(Encryption.hash(Encryption.increment(Crypto.converter.trits(seed.slice()))));
const start = 5;
const count = 6;
const security = 1;

const tree0 = new MerkleTree(seed, start, count, security);
const tree1 = new MerkleTree(seed, start + count, count, security);
let index = 0;

console.log("creating MAM channel root message:"+message);
console.log("Channel key: "+channelKey);

// Get the trytes of the MAM transactions
const mam = new MAM.create({
    message: iota.utils.toTrytes(message),
    merkleTree: tree0,
    index: index,
    nextRoot: tree1.root.hash.toString(),
    channelKey: channelKey,
});

// Depth
const depth = 4;

// minWeighMagnitude
const minWeightMagnitude = 9;

console.log("Next Key: " + mam.nextKey);

// Send trytes

iota.api.sendTrytes(mam.trytes, depth, minWeightMagnitude, (err, tx) => {
  if (err)
    console.log(err);
  else {
    console.log(tx);
    console.log("message sent.");
  }
});
