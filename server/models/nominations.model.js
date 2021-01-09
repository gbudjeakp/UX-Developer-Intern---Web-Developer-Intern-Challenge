const mongoose = require('mongoose')
const Schema = mongoose.Schema

const nominationSchema = new Schema({
  movieId: String,

  movieTitle: String,

  movieYear: String

})

const Nomination = mongoose.model('Nomination', nominationSchema)

module.exports = Nomination
