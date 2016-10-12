// import express
var express = require('express')

var app = express()
var port = 4000

// middleware for all request
// running express with egs
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))

// set the require routes
var user_routes = require('./routes/users')

var posts = require('./routes/posts')

// set the middleware for routes
app.get('/', function (req, res) {
  res.render('index')
})

app.use('/posts', posts)

app.use('/users', user_routes)
// take this out from app.js

// listening to the opened port
app.listen(port)
console.log('server running at http://localhost:'+port+'/')
