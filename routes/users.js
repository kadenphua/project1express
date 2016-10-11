var express = require('express')
var router = express.Router()

// setting the route to homepage
// app.get('/path-name', callback(request, response))

router.get('/contact', function(req, res) {
  res.send('contact pages')
})

router.get('/', function(req, res) {
  res.send('hello world')
})

router.get('/about', function(req, res) {
  res.send('about pages')
})

router.get('/hello', function(req, res) {
  res.send('hello')
})

module.exports = router
