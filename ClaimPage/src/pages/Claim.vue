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

      <input type="button" @click="create()" value="Waardepapier aanmaken" />
    </div>
  </div>
</template>

<script>
import Singleton from "@/utils/Singleton.js"
import RandomString from '@/utils/RandomString.js'
import discipl from 'discipl-core'
import ClaimClient from '@/utils/ClaimClient.js'
import QrCode from '@/components/qrcode.vue'
import LZString from 'lz-string'

export default {
  components: {
    QrCode
  },
  methods: {
    async create() {
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
      var qrString = JSON.stringify({
        data: claimStr,
        pKey,
        attestorDid: r.body.attestorDid
      });
      console.log(qrString);
      qrString = LZString.compress(qrString)
      console.log(qrString);
      this.qrData = qrString
    }
  },
  mounted() {
    console.log(discipl);
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
      qrData: null
    }
  }
}
</script>

<style lang="css">
</style>
