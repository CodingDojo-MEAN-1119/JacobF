const mongoose = require('mongoose')
const GameSchema = mongoose.Schema({

}, {timestamps: true})
module.exports = mongoose.model('Game', GameSchema);
