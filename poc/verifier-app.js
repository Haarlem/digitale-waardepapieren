

function getQRScan() {
  var result = new Object();
  result.claim = "";
  result.attestor = "";
  result.key = "";
  return result;
}

function verifyClaim() {
  const store = new DCIOTA(iotanode);
  result = getQRScan();
  if(store.verify(result.claim, result.attestor, result.key)) {
    window.alert("Success!");
  } else {
    window.alert("Failure!");
  }
}
