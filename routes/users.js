var express = require('express')
var router = express.Router()

// setting the route
// app.get('/path-name', callaback(req, res))
router.get('/', function (req, res) {
  res.send('Welcome to Users Homepage.')
})
router.get('/aboutus', function (req, res) {
  res.send('This is Users Info.')
})
router.get('/contactus', function (req, res) {
  res.send('I am located at Yishun.')
})

module.exports = router
