
const mongoose = require('mongoose');
// Define the model

var Todo = mongoose.model('Todo', {
    text:{
        type: String,
        required: true,
        minLength: 1
    },completed:{
        type: Boolean,
        default: false
    },completedAt:{
        type: Number,
        default: null
    }
});

module.exports = {Todo}