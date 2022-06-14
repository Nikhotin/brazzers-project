const { Router } = require('express');
const router = Router();

const BooksRoutes = require('../models/Books');

// /books
router.get('/', (req, res) => {
  BooksRoutes.find({}, (err, books) => {
    if (err) console.log('error', err)
    res.send(books)
  })
}) // /books

router.get('/:id', (req, res) => {
  BooksRoutes.findOne({_id: req.params.id }, (err, book) => {
    if (err) console.log('error', err)

    res.send(book)
  })
}) // /books/:id

module.exports = router;