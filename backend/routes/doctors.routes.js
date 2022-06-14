const { Router } = require('express');
const router = Router();

const DoctorsRoutes = require('../models/Doctors');

// /doctors
router.get('/', (req, res) => {
  DoctorsRoutes.find({}, (err, doctors) => {
    if (err) console.log('error', err)
    res.send(doctors)
  })
})

module.exports = router;