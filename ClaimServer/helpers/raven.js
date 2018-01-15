const Raven = require('raven')

var dsn = null
module.exports = {
  init(_dsn) {
    dsn = _dsn
    Raven.config(dsn).install();
  },
  captureException(e) {
    if(dsn) {
      Raven.captureException(e)
    }
  }
}
