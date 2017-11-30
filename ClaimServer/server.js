const restify = require('restify')
const restifyPlugins = require('restify').plugins

const server = restify.createServer()
const corsMiddleware = require('restify-cors-middleware')

const cors = corsMiddleware({
  origins: ['*'],
  allowHeaders: [''],
  exposeHeaders: ['']
})

server.pre(cors.preflight)
server.use(cors.actual)
server.use(restifyPlugins.bodyParser())

// Require API endpoints here
require('./api/claim.js')(server)

module.exports = {
  start() {
    const port = process.env.PORT || 8080
    server.listen(port, function() {
      console.log('%s listening at %s', server.name, server.url)
    })
  }
}
