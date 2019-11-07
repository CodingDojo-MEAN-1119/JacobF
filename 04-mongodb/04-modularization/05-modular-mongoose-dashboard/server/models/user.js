const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    username: {type: String},
    lucky_number: {type: Number},
    fav_language: {type:String}
   }, {timestamps: true})

module.exports = mongoose.model('User', UserSchema);