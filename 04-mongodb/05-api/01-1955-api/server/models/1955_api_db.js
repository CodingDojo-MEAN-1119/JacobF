const mongoose = require('mongoose')
const PersonSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name field is required"],
        minlength: [3, "3-45"],
        maxlength: [45, "3-45"],
        trim: true,
    }
}, {timestamps: true})
module.exports = mongoose.model('Person', PersonSchema);