var express = require('express')
var router = express.Router()

// setting the route
// app.get('/path-name', callaback(req, res))
router.get('/', function (req, res) {
  res.send('Welcome to General Assembly.')
})
router.get('/aboutus', function (req, res) {
  res.send('This is General Assembly.')
})
router.get('/contactus', function (req, res) {
  res.send('We are located at 8 Claymore Hill.')
})

module.exports = router
