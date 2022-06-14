const { Schema, model } = require('mongoose');

const booksSchema = new Schema({
  name: String,
  qualification: String
})

module.exports = model('doctors', booksSchema)
