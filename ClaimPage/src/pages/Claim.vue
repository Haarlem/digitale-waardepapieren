<template lang="html">
  <div id="content" class="CTID-99-_ eb-99-panel content">
    <div class="CTID-471-_ eb-471-panel service-form wrapper">
      <h3>{{ login.username }}</h3>
      <p>
        Geboren te {{ login.birth_city }} in {{ login.birth_date }}
      </p>
      <p v-if="qrData != null">
        <qr-code :data="qrData"></qr-code>
      </p>
      <p align="center" v-if="state == 'loading'">
        <span v-if="powProgress > 0">
          <loading-progress
            :progress="powProgress"
            :indeterminate="false"
            :counter-clockwise="false"
            :hide-background="false"
            shape="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
            size="128"
          />
          <br />
          We verwerken nu de attestatieclaim, dit kan tot 60 seconden duren...
        </span>
        <span v-else>
          <loading-progress
            :progress="0"
            :indeterminate="false"
            :counter-clockwise="false"
            :hide-background="false"
            shape="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
            size="128"
          />
        </span>
      </p>
      <div align="center" v-if="state == 'error'">
        <h2>Excuses voor het ongemak</h2>
        Er is iets mis gegaan bij het maken van de attestatieclaim. Probeer het later nog eens.
        <div style="clear:both;"></div>
      </div>
      <div>
        <input v-if="state == 'loading'" disabled type="button" value="Waardepapier aanmaken" />
        <input v-else type="button" @click="create()" value="Waardepapier aanmaken" />
      </div>
    </div>
    <img ref="pdfTemplate" style="display: none;" src="@/assets/pdf_template.png" />
  </div>
</template>

<script>
import Singleton from "@/utils/Singleton.js"
import RandomString from '@/utils/RandomString.js'
import discipl from 'discipl-core'
import ClaimClient from '@/utils/ClaimClient.js'
import QrCode from '@/components/qrcode.vue'
import AttestationPdfMaker from '@/utils/AttestationPdfMaker.js'
import seedGen from '@/utils/seedGen.js'
import pify from 'pify'
import { IOTABalanceClient } from '@/utils/iota-balance-client'
require('curl.lib.js')
var QRCode = require('qrcode')
var IOTA = require('iota.lib.js')
var iotaBalanceClient = new IOTABalanceClient(IOTA, IOTA_NODES)
iotaBalanceClient.setOnChangeNode((iota) => {
  curl.overrideAttachToTangle(iota)
})
curl.overrideAttachToTangle(iotaBalanceClient.iota)

export default {
  components: {
    QrCode
  },
  methods: {
    async create() {
      try {
        this.powProgress = 0;
        this.state = 'loading'
        // pKey is a cryptographically secure random string
        const localConnector = new discipl.connectors.local()
        discipl.initState(localConnector, null)
        const pKey = RandomString(32);
        const did = await discipl.getDid(localConnector, pKey)
        const claim = Object.assign({}, this.login, { "@id": did })
        const claimStr = JSON.stringify(claim)
        var r = await ClaimClient.claim({
          did, forceData: claimStr
        })
        if(typeof r.body.error !== 'undefined') {
          alert(`Er is iets fout gegaan tijdens het maken van de attestatieclaim! Probeer het later nog eens.`);
          return;
        }
        curl.init()
        var transfers = [
          {
            address: r.body.message.address,
            value: 0,
            message: r.body.message.payload
          }
        ]
        var tmpSeed = await seedGen()
        var preparedTransfers = await iotaBalanceClient.context(async (iota) => {
          return await pify(iota.api.prepareTransfers.bind(iota.api))(tmpSeed, transfers)
        })
        this.powProgress = 0.05;
        curl.setOnProgress((i) => {
          this.powProgress = Math.min((i / parseFloat(preparedTransfers.length)), 1)
        })
        var objs =  await iotaBalanceClient.context(async (iota) => {
          return await pify(iota.api.sendTrytes.bind(iota.api))(preparedTransfers, 3, 14)
        })
        console.log('pow done', objs);
        var qrString = JSON.stringify({
          data: claimStr,
          pKey,
          attestorDid: r.body.attestorDid
        });
        console.log("QR data: ", qrString)
        var canvas = document.createElement('canvas')
        var _this = this
        QRCode.toCanvas(canvas, [
          { data: qrString, mode: 'byte' }
        ], function (error) {
          if (error) console.error('QR code', error)
          _this.state = 'done'
          AttestationPdfMaker.makeAttestationPDF(JSON.parse(claimStr), canvas.toDataURL('png'), _this.$refs.pdfTemplate)
        })
      } catch (e) {
        this.state = 'error'
        Raven.captureException(e)
      }
    }
  },
  mounted() {
    var birth_day = Math.round(1 + (Math.random() * 31))
    if(birth_day < 10) {
      birth_day = "0" + birth_day
    }
    var birth_month = Math.round(1 + (Math.random() * 12))
    if(birth_month < 10) {
      birth_month = "0" + birth_month
    }
    var birth_year = Math.round(1950 + (Math.random() * 50))
    var birth_city = "Haarlem"

    this.login.birth_city = birth_city
    this.login.birth_date = `${ birth_day }-${ birth_month }-${ birth_year }`
  },
  data() {
    return {
      login: Singleton.user,
      qrData: null,
      state: 'idle',
      powProgress: 0
    }
  }
}
</script>

<style lang="css" scoped>
</style>
