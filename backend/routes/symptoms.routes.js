const { Router } = require('express');
const router = Router();

const SymptomsRoutes = require('../models/Symptoms');

// /doctors
router.get('/', (req, res) => {
  SymptomsRoutes.find({}, (err, symptoms) => {
    if (err) console.log('error', err)
    res.send(symptoms)
  })
})

module.exports = router;