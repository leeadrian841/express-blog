var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
var Movie = require('../models/movie')

// setting the route
// app.get('/path-name', callaback(req, res))
router.get('/', function (req, res) {
  res.render('movies/index')
}).get('/new', function (req, res) {
  res.render('movies/new')
})
// .get('/:id', function (req, res) {
//   res.send('Welcome to ' + req.params.id + ' \'s posts.')
// }).get('/:id/new', function (req, res) {
//   res.send('Hi, ' + req.params.id + '!. Type your new post here.')
// }).get('/:id/edit', function (req, res) {
//   res.render('movies/edit')
//   res.send('Hi, ' + req.params.id + '!. Edit your new post here.')
// })

router.post('/', function (req, res) {
  var newMovie = new Movie({
    name: req.body.MovieName.name,
    year: req.body.MovieYear.year
  })
  newMovie.save(function (err) {
    if (err) throw new Error(err)
  })
  res.render('movies/index', {
    'message': 'Form Submitted'
  })
  res.send(newMovie)
})

// router.put('/:id', function (req, res) {
//   res.send('edit movie' + req.params.id)
// })
//
// router.delete('/:id', function (req, res) {
//   res.send('Hi, ' + req.params.id + '!. Do you want to delete this post?')
// })

module.exports = router
