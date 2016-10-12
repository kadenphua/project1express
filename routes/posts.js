var express = require('express')
var router = express.Router()

// setting the route to homepage
// app.get('/path-name', callback(request, response))

router.get('/contact', function(req, res) {
  res.send('contact pages')
})

router.get('/', function(req, res) {
  res.send('this is a post landing page')
})

router.get('/about', function(req, res) {
  res.send('about pages')
})

// :name is just a variable, it can be test or userID
// must be at the end
router.get('/:name', function(req, res) {
  res.send('dont exist')
})

router.get('/:name/edit', function(req, res) {
  res.send('the post id is ' + req.params.name)
})
module.exports = router
