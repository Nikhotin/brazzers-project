const { Schema, model } = require('mongoose');

const booksSchema = new Schema({
  name: String,
  class: String
})

module.exports = model('symptoms', booksSchema)
