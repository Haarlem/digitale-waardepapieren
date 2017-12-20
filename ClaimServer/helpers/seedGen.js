const crypto = require('crypto');
const randomNumber = require("random-number-csprng");

module.exports = async () => {
  var length = 81;
  var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ9";
  var result = [];

  for(var i = 0; i < length; i++) {
    var num = await randomNumber(0, (charset.length * Math.floor(255 / charset.length)) - 1)
    result.push(charset[num % charset.length])
  }

  return new Promise(function(resolve, reject) {
    resolve(result.join(""))
  });
};
