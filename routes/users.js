var express = require('express')
var router = express.Router()

// setting the route
// app.get('/path-name', callaback(req, res))
router.get('/', function (req, res) {
  res.render('users/index')
}).get('/new', function (req, res) {
  res.render('users/new')
})
// .get('/:id', function (req, res) {
//   res.send('Welcome to ' + req.params.id + ' \'s posts.')
// }).get('/:id/new', function (req, res) {
//   res.send('Hi, ' + req.params.id + '!. Type your new post here.')
// }).get('/:id/edit', function (req, res) {
//   res.send('Hi, ' + req.params.id + '!. Edit your new post here.')
// })

router.post('/', function (req, res) {
  res.send(req.body)
})

router.delete('/:id', function (req, res) {
  res.send('Hi, ' + req.params.id + '!. Do you want to delete this post?')
})

module.exports = router
