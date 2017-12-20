<template lang="html">
  <canvas ref="canvas"></canvas>
</template>

<script>
var QRCode = require('qrcode')

function refresh() {
  var canvas = this.$refs.canvas
  QRCode.toCanvas(canvas, [
    { data: this.data, mode: 'byte' }
  ], function (error) {
    if (error) console.error('QR code', error)
  })
}

export default {
  props: ['data'],
  watch: {
    data(old, newVal) {
      refresh.apply(this)
    }
  },
  mounted() {
    refresh.apply(this)
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="css">
</style>
