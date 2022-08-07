const mongoose = require ('mongoose');
const workoutSchema = mongoose.Schema({
    name:String,
    day:Date,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    totalDuration: {
        type:Number,
        default:0
    },
    
   
});
module.exports =mongoose.model('Workout', workoutSchema)