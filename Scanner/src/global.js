const IOTA = require('iota.lib.js')

var global = {
  iota_provider: 'https://xurux_iota.codebuffet.co'
}

global.iota = new IOTA({ provider: global.iota_provider })

window.global = global
Object.freeze(window.global)
