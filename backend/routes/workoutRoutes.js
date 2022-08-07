const express = require('express');
const router = express.Router();

const { getWorkout, deleteWorkout, setWorkouts } = require('../controllers/workoutController');
const {protect} = require('../middleware/authMiddleware');

router.route('/').get(protect, getWorkout).post(protect, setWorkouts);

router.route('/:id').delete(protect,deleteWorkout);

module.exports = router;