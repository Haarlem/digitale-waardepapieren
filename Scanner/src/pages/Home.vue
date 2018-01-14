<template lang="pug">
#box
	div
		div(v-show="status == 'scanning'")
			video.qrVideo(ref="v", autoplay, playsinline)
			.workaround
				canvas.qrCanvas(ref="qrCanvas")

		div(v-if="status == 'verifying'")
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
			if(decoded) {
				this.onDetected(decoded)
			}
			else {
				setTimeout(this.tryScanQR.bind(this), 500)
			}
		},
    async onDetected(data) {
			data = JSON.parse(data)
		  this.status = 'verifying'
		  var iota = window.global.iota
		  console.log(Mam);
		  var timeoutTimer = setTimeout(() => {
		    var yes = confirm(`De IOTA-node doet er lang over met reageren... Wil je de pagina herladen en het opnieuw proberen?`)
		    if (yes) {
		      window.location.reload()
		    }
		  }, 15000)
		  const iotaConnector = new discipl.connectors.iota(Mam, iota)
		  const localConnector = new discipl.connectors.local()
		  this.scannedData = JSON.parse(data.data)

		  discipl.initState(iotaConnector, null)
		  discipl.initState(localConnector, null)
		  const pKey = data.pKey
		  const did = await discipl.getDid(localConnector, pKey)

		  console.log('did: ' + did);

		  var verified = await discipl.verify(iotaConnector, did, data.attestorDid, data.data, did)
		  clearTimeout(timeoutTimer)
		  console.log('verified', verified);
		  if (verified) {
		    this.status = 'correct'
		  } else {
		    this.status = 'incorrect'
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
