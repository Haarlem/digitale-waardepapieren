const request = require('browser-request')
const startURL = 'http://localhost:8081'

export default {
  claim(obj) {
    return new Promise(function(resolve, reject) {
      request({
        method: 'POST',
        url: startURL + '/claim',
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
