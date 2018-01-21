<template lang="pug">
#box
	div
		div(v-show="status == 'scanning'")
			video.qrVideo(ref="v", autoplay, playsinline)
			.workaround
				canvas.qrCanvas(ref="qrCanvas")

		div(v-if="status == 'verifying'")
			beat-loader()

		div(v-if="status == 'error'")
			h3 Helaas..
			span Er is een fout opgetreden en de ontwikkelaar is geinformeerd. Probeer het later nog eens.
			|<div class="btn btn-1 main" @click="reset()">Opnieuw scannen</div>

		div(v-if="status == 'retrying'")
			h3 We blijven proberen...
			span De IOTA-server waarmee je verbonden bent reageerde niet. We proberen het nu op een andere server.
			beat-loader()

		form(@submit.prevent="scan()" v-if="status == 'idle'")
			| BSN:
			input(required, v-model="bsn", type="number")

			.form-elem
				span Kanaal:
				select(v-model="selectedChannel")
					option(value="1") Haarlem
				|<div class="btn btn-1 main" @click="$refs.init_form_submit_workaround.click()">Scan</div>
			input(ref="init_form_submit_workaround", type="submit", style="display:none")

		div(v-if="status == 'incorrect'")
			img.stateIcon(src="../assets/img/incorrect.png")
			|<div class="btn btn-1 main" @click="scan()">Terug</div>
			|<div class="btn btn-1 main" @click="reset()">Opnieuw scannen</div>

		div(v-if="status == 'correct'")
			img.stateIcon(src="../assets/img/correct.png")
			.dataTable
				.row(v-for="(v, k) in scannedData")
					.name {{ displayNames[k] }}
					.val  {{ v }}
			|<div class="btn btn-1 main" @click="reset()">Opnieuw scannen</div>
</template>

<script>
import BeatLoader from 'vue-spinner/src/BeatLoader.vue'
import discipl from 'discipl-core'
require('mam.client.js/lib/mam.web.js')
var jsQR = require("jsqr")
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

export default {
  components: {
    BeatLoader
  },
  mounted() {

  },
  methods: {
    load() {
      var constraints = {
        audio: false,
        video: {
          facingMode: 'environment'
        }
      };
      var video = this.$refs.v
      var _this = this
      navigator.mediaDevices.getUserMedia(constraints)
        .then(function(stream) {
          video.srcObject = stream
          setTimeout(_this.tryScanQR.bind(_this), 500)
        })
        .catch(function(err) {
          console.error('getUserMedia err', err);
          Raven.captureException(err)

          if (err.name === "PermissionDeniedError") {
            var msg = [`De camera is nodig voor het scannen van QR codes. Het is ons echter niet gelukt toegang tot de camera te bemachtigen.`];
            if (isIOS) {
              msg.push(`Je kan bij Instellingen > Safari de toegang tot de camera aanzetten.`)
            } else {
              msg.push(`Mocht u de toegang tot de camera geweigerd hebben, dan kunt u deze via de site-instellingen (meestal vindbaar op de adresbalk) opnieuw activeren.`)
            }
            // console.log(msg.join("\n"));
            alert(msg.join("\n"))
          }
        });
    },
    tryScanQR() {
      var canvas = this.$refs.qrCanvas
      var video = this.$refs.v
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight
      var ctx = canvas.getContext('2d')
      ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight)
      var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      var decoded = jsQR.decodeQRFromImage(imageData.data, imageData.width, imageData.height)
      if (decoded) {
        this.onDetected(decoded)
      } else {
        setTimeout(this.tryScanQR.bind(this), 500)
      }
    },
    async onDetected(data) {
      try {
        data = JSON.parse(data)
        this.status = 'verifying'
        var iotaBalanceClient = window.global.iotaBalanceClient
        var iotaConnector = new discipl.connectors.iota(Mam, iotaBalanceClient.iota)
        var localConnector = new discipl.connectors.local()
        iotaBalanceClient.setOnChangeNode((iota) => {
          iotaConnector = new discipl.connectors.iota(Mam, iota)
          localConnector = new discipl.connectors.local()
          discipl.initState(iotaConnector, null)
          discipl.initState(localConnector, null)
          this.status = 'retrying'
        })

        this.scannedData = JSON.parse(data.data)
        const pKey = data.pKey
        const did = await discipl.getDid(localConnector, pKey)
        var verified = await iotaBalanceClient.context(async (iota) => {
          return await discipl.verify(iotaConnector, did, data.attestorDid, data.data, did)
        })
        console.log('verified', verified);
        if (verified) {
          this.status = 'correct'
        } else {
          this.status = 'incorrect'
        }
      } catch (e) {
				Raven.captureException(e)
				console.error('scan error', e);
        this.status = 'error'
      }
    },
    reset() {
      this.status = 'idle'
      this.scannedData = null
      this.bsn = ''
    },
    scan() {
      this.scannedData = null
      this.status = 'scanning'
      this.load()
    }
  },
  data() {
    return {
      displayNames: {
        birth_city: "Geboortestad",
        birth_date: "Geboortedatum",
        username: "Naam",
        "@id": "DID"
      },
      status: 'idle',
      selectedChannel: 1,
      scannedData: null,
      bsn: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
.qrVideo
	width 100%

img.stateIcon
	width: 50%

.dataTable
	word-wrap: break-word
	.name
		font-weight bold

	//.val


.workaround
	overflow hidden
	position absolute
	left 0
	top 0
	width 5px
	height 5px
	z-index -1
</style>
