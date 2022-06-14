const express = require('express');
const config = require('config');
const cors = require('cors');
const mongoose = require('mongoose');
const BooksRoutes = require('./routes/books.routes')
const DoctorsRoutes = require('./routes/doctors.routes')
const SymptomsRoutes = require('./routes/symptoms.routes')

const app = express();

app.use(cors())

app.use('/books', BooksRoutes)
app.use('/doctors', DoctorsRoutes)
app.use('/symptoms', SymptomsRoutes)

const PORT = config.get('port') || 5000;

const db = mongoose.connection;

async function start() {
  try {
    await mongoose.connect(config.get('mongoURI'))
    db.once('open', () => {
      console.log('Connected');
    })
    app.listen(PORT, () => console.log(`Server has been started on port ${PORT}...`))
  } catch (e) {
    console.log('Server error', e.message)
    process.exit(1)
  }
}

start();