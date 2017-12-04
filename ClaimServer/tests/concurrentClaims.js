const request = require('request')

var dids = {}
const amount = 100
console.log(`Doing test with ${amount} concurrent /claim requests`);

for(var i2 = 0; i2 < amount; i2++) {
  (function(i) {
    var did = "iota:fakeuser:" + i
    console.log("Doing request for " + did);
    request({
      uri: 'http://localhost:8080/claim',
      method: 'POST',
      json: {
        did: did,
        rKey: "fakeKey:" + i
      }
    }, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body) // Print the shortened url.
        if(typeof dids[body.attestorDid] !== 'undefined') {
          throw new Error("Error! Same root got returned as a previous request! This should never happen!")
        }
        dids[body.attestorDid] = 1
      }
      else {
        console.error(`Reqeust error for ${did}! (Ignored)`, error);
      }
    });
  })(i2)
}
