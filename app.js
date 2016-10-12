// import express
var express = require('express')

var app = express()
var port = 4000

// middleware for all requests

// running express with egs
app.set('view engine', 'ejs')

// the line below can only be used once
app.use(express.static(__dirname + '/public'))

// set the required routes
var user_routes = require('./routes/users')

var posts = require('./routes/posts')

// set the middleware for routes
// automatically link to index.ejs in views folder?
app.get('/', function (req, res, next) {
  res.render('index')
})

app.use('/posts', posts)

app.use('/users', user_routes)

// listening to the opened port
app.listen(port)
console.log('server running at http://localhost:'+port+'/')
