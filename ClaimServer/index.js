const db = require('./db.js')
const IOTA = require('iota.lib.js')
const ravenHelper = require('helpers/raven.js')

process.on('unhandledRejection', (r) => {
  console.log(r);
});

async function initDefaultChannel(iota, name) {
  var channel = await db.getChannelByName(name)
  if(channel == null) {
    console.warn(`No channel named '${name}' found! Making now...`);
    await db.newChannel({ name, iota })
    channel = await db.getChannelByName(name)
  }
}

(async () => {
  await db.init()
  var settings = await db.getSettings();
  console.log('Settings: ', settings);
  if(settings.sentry_dsn) {    
    ravenHelper.init(settings.sentry_dsn)
  }
  var iota = new IOTA({ provider: settings.iota_provider })
  await initDefaultChannel(iota, "haarlem")

  const server = require('./server.js')
  server.start(iota)
})()
