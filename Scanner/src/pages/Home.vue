<template lang="pug">
#box
	div
		video(ref="v")
		canvas(ref="qrCanvas")

		.form-elem
			span Kanaal:
			select(v-model="selectedChannel")
			option(value="1") Haarlem
			| <div @click="scan()" class="btn btn-1 main">Scan</div>
</template>

<script>
var gCtx = null;
var gCanvas = null;
var imageData = null;
var ii = 0;
var jj = 0;
var c = 0;
var stype = 0;
var gUM = false;
var webkit = false
var moz = false
var v = null
var jsQR = require("jsqr")

function success(stream) {
  if (webkit)
    v.src = window.URL.createObjectURL(stream);
  else
  if (moz) {
    v.mozSrcObject = stream;
    v.play();
  } else
    v.src = stream;
  gUM = true;
  setTimeout(captureToCanvas, 500);
}

function error(error) {
  gUM = false;
  return;
}

function handleFiles(f) {
  var o = [];
  for (var i = 0; i < f.length; i++) {
    var reader = new FileReader();
    reader.onload = (function(theFile) {
      return function(e) {
        qrcode.decode(e.target.result);
      };
    })(f[i]);
    // Read in the image file as a data URL.
    reader.readAsDataURL(f[i]);
  }
}

function isCanvasSupported() {
  var elem = document.createElement('canvas');
  return !!(elem.getContext && elem.getContext('2d'));
}

function load(gCanvas, callback) {
  if (isCanvasSupported() && window.File && window.FileReader) {
    initCanvas(gCanvas, 800, 600);
    qrcode.callback = callback;
    setwebcam();
  } else {
    // document.getElementById("mainbody").innerHTML='<p id="mp1">QR code scanner for HTML5 capable browsers</p><br>'+
    //     '<br><p id="mp2">sorry your browser is not supported</p><br><br>'+
    //     '<p id="mp1">try <a href="http://www.mozilla.com/firefox"><img src="firefox.png"/></a> or <a href="http://chrome.google.com"><img src="chrome_logo.gif"/></a> or <a href="http://www.opera.com"><img src="Opera-logo.png"/></a></p>';
  }
}

function initCanvas(gCanvas, ww, hh) {
  var w = ww;
  var h = hh;
  gCanvas.style.width = w + "px";
  gCanvas.style.height = h + "px";
  gCanvas.width = w;
  gCanvas.height = h;
  gCtx = gCanvas.getContext("2d");
  gCtx.clearRect(0, 0, w, h);
  imageData = gCtx.getImageData(0, 0, 320, 240);
}

function passLine(stringPixels) {
  //a = (intVal >> 24) & 0xff;
  var coll = stringPixels.split("-");

  for (var i = 0; i < 320; i++) {
    var intVal = parseInt(coll[i]);
    r = (intVal >> 16) & 0xff;
    g = (intVal >> 8) & 0xff;
    b = (intVal) & 0xff;
    imageData.data[c + 0] = r;
    imageData.data[c + 1] = g;
    imageData.data[c + 2] = b;
    imageData.data[c + 3] = 255;
    c += 4;
  }
  if (c >= 320 * 240 * 4) {
    c = 0;
    gCtx.putImageData(imageData, 0, 0);
  }
}

function setwebcam2(options) {
  if (stype == 1) {
    setTimeout(captureToCanvas, 500);
    return;
  }
  var n = navigator;

  if (n.getUserMedia) {
    webkit = true;
    n.getUserMedia({
      video: options,
      audio: false
    }, success, error);
  } else
  if (n.webkitGetUserMedia) {
    webkit = true;
    n.webkitGetUserMedia({
      video: options,
      audio: false
    }, success, error);
  } else
  if (n.mozGetUserMedia) {
    moz = true;
    n.mozGetUserMedia({
      video: options,
      audio: false
    }, success, error);
  }

  stype = 1;
  setTimeout(captureToCanvas, 500);
}

function setwebcam() {
  var options = true;
  if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
    try {
      navigator.mediaDevices.enumerateDevices()
        .then(function(devices) {
          devices.forEach(function(device) {
            if (device.kind === 'videoinput') {
              if (device.label.toLowerCase().search("back") > -1)
                options = {
                  'deviceId': {
                    'exact': device.deviceId
                  },
                  'facingMode': 'environment'
                };
            }
            console.log(device.kind + ": " + device.label + " id = " + device.deviceId);
          });
          setwebcam2(options);
        });
    } catch (e) {
      console.log(e);
    }
  } else {
    console.log("no navigator.mediaDevices.enumerateDevices");
    setwebcam2(options);
  }
}

function captureToCanvas() {
  if (stype != 1)
    return;
  if (gUM) {
    try {
      gCtx.drawImage(v, 0, 0);
      try {
        var imageData = gCtx.getImageData(0, 0, gCanvas.width, gCanvas.height);
        var decoded = jsQR.decodeQRFromImage(imageData.data, imageData.width, imageData.height);
        if(decoded) {
          qrcode.callback(decoded)
        } else {
          setTimeout(captureToCanvas, 500);
        }
      } catch (e) {
        console.log(e);
        setTimeout(captureToCanvas, 500);
      };
    } catch (e) {
      console.log(e);
      setTimeout(captureToCanvas, 500);
    };
  }
}

export default {
  mounted() {
    v = this.$refs.v
    gCanvas = this.$refs.qrCanvas
    load(this.$refs.qrCanvas, this.onDetected.bind(this))
  },
  methods: {
    onDetected(data) {
      alert("DATA! " + data.length)
      var code = data.codeResult.code
      var json = JSON.parse(data.codeResult.code)
    },
    scan() {}
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
