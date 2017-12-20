# Intro

For each method (i.e `create_channel`) there is a file that is accepting the request for that method. A typical endpoint definition boilerplate looks like this:

```js
module.exports = (server) => {
  server.post('/create_channel', (req, res, next) => {
    res.send('hello ' + req.params.name);
    next();
  })
}
```
