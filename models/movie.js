var mongoose = require('mongoose')

// create a r for movie
var movieSchema = new mongoose.Schema({
  name: String,
  year: Number,
  rating: Number
})

var Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie
