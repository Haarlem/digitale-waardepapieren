const IOTA = require('iota.lib.js')

var global = {
  iota_provider: 'http://p103.iotaledger.net:14700/'
}

global.iota = new IOTA({ provider: global.iota_provider })

window.global = global
Object.freeze(window.global)
