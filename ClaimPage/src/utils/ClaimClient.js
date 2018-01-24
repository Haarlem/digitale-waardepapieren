const request = require('browser-request')

export default {
  claim(obj) {
    return new Promise(function(resolve, reject) {
      request({
        method: 'POST',
        url: CLAIM_SERVER_URL + '/claim',
        json: obj
      }, (e, r) => {
        if(e) {
          reject(e)
        }
        else {
          resolve(r)
        }
      })
    });
  }
}
