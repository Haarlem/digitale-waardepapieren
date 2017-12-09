const IOTA = require('iota.lib.js')

var global = {
  iota_provider: 'https://testnet140.tangle.works/'
}

global.iota = new IOTA({ provider: global.iota_provider })

window.global = global
Object.freeze(window.global)
