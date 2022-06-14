const { Schema, model } = require('mongoose');

const booksSchema = new Schema({
  sport: String,
  equipment: [String],
  variants: {
    us: String,
    eu: String
  },
  origin: String,
})

module.exports = model('books', booksSchema)
