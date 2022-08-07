const asyncHandler = require('express-async-handler');

const Workout = require('../models/workoutModel');
const User = require('../models/userModel');

//@desc Get Goals
//@route  GET /api/workouts
//@access Private
const getWorkout = asyncHandler(async (req, res) => {
    const workouts = await Workout.find({user: req.user.id});

    res.status(200).json(workouts);
});
//@desc Set Workouts
//@route  POST /api/workouts
//@access Private
const setWorkouts = asyncHandler(async (req, res) => {
    if(!req.body.name){
        res.status(400)
        throw new Error('Please add a text field')
    }
    const workout = await Workout.create({
        name: req.body.name,
        day:req.body.day,
        user:req.user.id,
        totalDuration:req.body.totalDuration,
        })

    res.status(200).json(workout);
});
//@desc Delete Workouts
//@route  DELETE /api/workouts:id
//@access Private
const deleteWorkout = asyncHandler(async (req, res) => {
    const workout = await Workout.findById(req.params.id)
    if (!workout){
        res.status(400)
        throw new Error('Workout Not found')
    }

    
    //Check for user
    if(!req.user){
        res.status(401);
        throw new Error('User Not Found')
    }
    //Make sure logged in user matches the goal user
    if(workout.user.toString() !== req.user.id){
        res.status(401);
        throw new Error('User Not Authorized')
    }
    
    await workout.remove();
    res.status(200).json({id: req.params.id});
});


module.exports = {
    getWorkout,setWorkouts,deleteWorkout
}