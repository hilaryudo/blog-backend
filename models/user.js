const mongoose = require('mongoose');
const {isEmail} = require('validator');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "please provide username"]
    },

    email: {
        type: String,
        required: [true, "please provide an email address"],
        unique: true,
        validate: [isEmail, 'please provide a valid email address']
    },

    password: {
        type: String,
        required: [true, 'please provide your password'],
        minlength: [8, 'password must be at least 8 characters']
    },

    role: {
        type: String,
        required: true,
        enum: ['user','admin'], 
        
    }
}, {timestamps: true}
);



module.exports = mongoose.model('User', userSchema)