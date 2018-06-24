const mongoose = require('mongoose');

/* Creating User Model */

var User = mongoose.model('User',{
    email:{
        type: String,
        required: true,
        trim: true,
        minLength: 5
    }
});

module.exports = {User}