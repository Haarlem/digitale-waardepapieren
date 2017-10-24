var Mam = require('./lib/mam.node.js');
const IOTA = require('iota.lib.js');


console.log("Hello Haarlem IOTA MAM PoT");

// Create IOTA instance directly with provider
var iota = new IOTA({
    'provider': 'http://p103.iotaledger.net:14700/'
});

// now you can start using all of the functions
//iota.api.getNodeInfo(function(error, success) {
//    if (error) {
//        console.error(error);
//    } else {
//        console.log(success);
//    }
//})

const example = async () => {
  // Init State
  let state = Mam.init(iota)
  // Create Message one
  console.log('Creating MAM payload - HELLO')
  var message1 = Mam.create(state, 'HELLO')
  state = message1.state
  console.log('Root: ', message1.root)
  // Attach that message
  await Mam.attach(message1.payload, message1.root)

  // Create Message Two
  console.log('Creating MAM payload ATTEST')
  var message2 = Mam.create(state, 'ATTEST')
  state = message2.state
  console.log('Root: ', message2.root)
  // Attach that message
  await Mam.attach(message2.payload, message2.root)

  // Create Message Two
  console.log('Creating MAM payload ATTEST')
  var message3 = Mam.create(state, 'ATTEST')
  state = message3.state
  console.log('Root: ', message3.root)
  // Attach that message
  await Mam.attach(message3.payload, message3.root)

  state = Mam.subscribe(state, message1.root)

  // Fetch data starting from root one!
  var listener = Mam.listen(state.subscribed[message1.root], logData)
  // console.log(listener)
  // setTimeout(() => clearInterval(listener), 20000)
}

const logData = data => console.log(data)

example()
