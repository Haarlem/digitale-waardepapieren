const IOTA = require('iota.lib.js'
import { IOTABalanceClient } from '@/utils/iota-balance-client'

var iotaBalanceClient = new IOTABalanceClient(IOTA, IOTA_NODES)
var global = {
  iotaBalanceClient
}

window.global = global
Object.freeze(window.global)
