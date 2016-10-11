var express = require('express')
var router = express.Router()

// setting the route
// app.get('/path-name', callaback(req, res))
router.get('/', function (req, res) {
  res.send('This is the posts.')
})
router.get('/new', function (req, res) {
  res.send('Type your new post here.')
})
router.get('/:id', function (req, res) {
  res.send('This is the posts from ' + req.params.id)
})
router.get('/:id/edit', function (req, res) {
  res.send(req.params.id + ', do you want to edit this post?')
})

module.exports = router
