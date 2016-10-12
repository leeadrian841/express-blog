var express = require('express')
var router = express.Router()

// setting the route
// app.get('/path-name', callaback(req, res))
router.get('/', function (req, res) {
  res.send('All users posts')
})
router.get('/:id', function (req, res) {
  res.send('Welcome to ' + req.params.id + ' \'s posts.')
})
router.get('/:id/new', function (req, res) {
  res.send('Hi, ' + req.params.id + '!. Type your new post here.')
})
router.get('/:id/edit', function (req, res) {
  res.send('Hi, ' + req.params.id + '!. Edit your new post here.')
})
router.delete('/:id', function (req, res) {
  res.send('Hi, ' + req.params.id + '!. Do you want to delete this post?')
})

router.post('/', function (req, res) {
  res.send('post movie form')
})

// UPDATE ROUTES
router.get('/:id/edit', function (req, res) {
  res.send('edit movie\'s ' + req.params.id + ' details')
})

router.put('/:id', function (req, res) {
  res.send('edit movie' + req.params.id)
})

// DELETE ROUTES
router.delete('/:id', function (req, res) {
  res.send('delete movie' + req.params.id)
})

module.exports = router
