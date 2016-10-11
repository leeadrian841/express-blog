// import express
var express = require('express')

// init express server
var app = express()
var port = 3000

// set the required routes
var routes = require('./routes/index')
var users_routes = require('./routes/users')
var posts_routes = require('./routes/posts')

// set the middlewares for routes
app.use('/', routes)
app.use('/users', users_routes)
app.use('/posts', posts_routes)

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
