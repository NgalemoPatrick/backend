const express = require('express')
// const Workout = require('../models/workoutModel')
const { createWorkout, getAllWorkout, getWorkout, deleWorkout, updateWorkout } = require('../controllers/workoutController')
const router = express.Router()


// Get all workout documents
router.get('/', getAllWorkout)

// Get single document
router.get('/:id', getWorkout)

// POST create single document
router.post('/', createWorkout)

// UPDATE Document
router.patch('/:id', updateWorkout)

// DELETE single document
router.delete('/:id', deleWorkout)


module.exports = router