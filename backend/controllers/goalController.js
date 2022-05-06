
const asyncHandler = require('express-async-handler');

//@desc Get Goals
//@route  GET /api/goals
//@access Private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({msg: 'Get Goals'});
});
//@desc Set Goals
//@route  POST /api/goals
//@access Private
const setGoals = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({msg: 'Set Goals'});
});
//@desc update Goals
//@route  PUT /api/goals/:id
//@access Private
const updateGoals = asyncHandler(async (req, res) => {
    res.status(200).json({msg: `Update goal ${req.params.id}`});
});
//@desc Delete Goals
//@route  DELETE /api/goals:id
//@access Private
const deleteGoals = asyncHandler(async (req, res) => {
    res.status(200).json({msg: `Delete goal ${req.params.id}`});
});


module.exports = {
    getGoals,setGoals,updateGoals,deleteGoals
}