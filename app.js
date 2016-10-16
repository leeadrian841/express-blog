// import express
var express = require('express')
var bodyParser = require('body-parser')
var methodOverride = require('method-override')
var mongoose = require('mongoose')

// init express server
var app = express()
var port = 3000

mongoose.connect('mongodb://localhost/blog')
mongoose.Promise = global.Promise

app.set('view engine', 'ejs')

// require path
// var path = require('path')
// var Movie = require('./models/movie')
var movies_routes = require('./routes/movies')

// middleware for all requests
// app.use('/', routes)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(methodOverride())
app.use('/movies', movies_routes)

// set the required routes
// var routes = require('./routes/index')
// var posts_routes = require('./routes/posts')
// var users_routes = require('./routes/users')

// set the middlewares for routes
// app.use('/', routes)
// app.use('/posts', posts_routes)
// app.use('/users', users_routes)

// take this out from app.js

// setting the route
// app.get('/path-name', callaback(req, res))
// app.get('/aboutus', function (req, res) {
//   res.send('This is General Assembly.')
// })
// app.get('/contactus', function (req, res) {
//   res.send('We are located at 8 Claymore Hill.')
// })

// listening to the opened port
app.listen(port)
console.log('Server running at http://localhost:' + port + '/')
