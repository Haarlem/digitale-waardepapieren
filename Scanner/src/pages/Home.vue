<template lang="pug">
  #box
    div
      #qr_result
      .form-elem
        span Kanaal:
        select(v-model="selectedChannel")
          option(value="1") Haarlem
      | <div @click="scan()" class="btn btn-1 main">Scan</div>
</template>

<script>
import Quagga from 'quagga';

export default {
  methods: {
    onDetected(data) {
      var code = data.codeResult.code
      var json = JSON.parse(data.codeResult.code)
    },
    scan() {
      Quagga.onDetected(this.onDetected)
      Quagga.init({
        inputStream : {
          name : "Live",
          type : "LiveStream",
          target: document.querySelector('#qr_result')    // Or '#yourElement' (optional)
        },
        decoder : {
          readers : ["code_128_reader"]
        }
      }, function(err) {
          if (err) {
              console.log(err);
              return
          }
          console.log("Initialization finished. Ready to start");
          Quagga.start();
      });
    }
  },
  data() {
    return {
      selectedChannel: 1
    }
  }
}
</script>

<style lang="css">
</style>
