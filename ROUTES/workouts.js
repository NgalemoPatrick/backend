const express = require('express')
const Workout = require('../models/workoutModel')
const router = express.Router()


// Get all workout documents
router.get('/', (req, res) => {
  res.json({ message: "GET all workout Documents" })
})

// Get single document
router.get('/:id', (req, res) => {
  res.json({ message: "GET single document" })
})

// POST create single document
router.post('/', async (req, res) => {

  const { title, load, reps } = req.body

  try {
    const workout = await Workout.create({ title, load, reps})
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
  res.json({ message: "POST a document" })
})

// UPDATE Document
router.patch('/:id', (req, res) => {
  res.json({ message: 'Update document' })
})

// DELETE single document
router.delete('/:id', (req, res) => {
  res.json({ message: "DELETE single document" })
})


module.exports = router