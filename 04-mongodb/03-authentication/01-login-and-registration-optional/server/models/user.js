const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');
const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        minlength: [3, "Required username length: 3-20"],
        maxlength: [20, "Required username length: 3-20"],
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        maxlength: [65, "Email must not exceed 65 characters"],
        trim: true,
        unique: true
    },
    first_name: {
        type: String,
        required: [true, "First name is required"],
        minlength: [1, "Required first name length: 1-25"],
        maxlength: [25, "Required first name length: 3-25"],
        trim: true
    },
    last_name: {
        type: String,
        required: [true, "Last name is required"],
        minlength: [1, "Required last name length: 1-25"],
        maxlength: [25, "Required last name length: 3-25"],
        trim: true
    },
    password: {
        type: String,
        required: [true, "A valid password is required"],
        minlength: [4, "Required password length: 4-30"],
        maxlength: [30, "Required password length: 4-30"],
        trim: true
    }
}, {timestamps: true})
UserSchema.plugin(uniqueValidator, {message: "That {PATH} is already taken"})
module.exports = mongoose.model('User', UserSchema);