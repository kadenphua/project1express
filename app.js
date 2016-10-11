// import express
var express = require('express')

var app = express()
var port = 4000

// var path = require('path')

// middleware for all request
// running express with egs
app.set('view engine', 'ejs')
app.use(express.static(__dirname + 'css'))

// app.use('/', express.static(path.join(__dirname, 'views')))

// app.use(function (req, res, next) {
//   console.log('new req method is ' + req.method, 'new req url is ' + req.url)
//   next()
// })
// set the require routes
var routes = require('./routes/index')

var user_routes = require('./routes/users')

var posts = require('./routes/posts')

// set the middleware for routes
app.get('/', function (req, res) {
  var tas = ['kailing', 'glen']
  res.render('index', {sth: 'Kaden Phua', taslist: tas})
})

app.get('/about', function (req, res) {
  res.render('about', {sth: 'xxx'})
})

app.get('/contact', function (req, res) {
  res.render('contact', {sth: '12123812391'})
})
// app.use('/', routes)
// app.use('/users', user_routes)
// app.use('/posts', posts)

// take this out from app.js

// listening to the opened port
app.listen(port)
console.log('server running at http://localhost:'+port+'/')
