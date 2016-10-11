var express = require('express')
var router = express.Router()

// setting the route to homepage
// app.get('/path-name', callback(request, response))

router.get('/contact', function(req, res) {
  res.send('contact pages')
})

router.get('/index', function(req, res) {
  res.send('index page')
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

// :name is just a variable, it can be test or userID
// by create /:xxx --> for those who typed the wrong url
// must be at the end
router.get('/:name', function(req, res) {
  res.send('dont exist')
})

module.exports = router
