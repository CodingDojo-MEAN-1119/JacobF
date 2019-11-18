const mongoose = require('mongoose')
const PlayerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  prefPosition: {
    type: String,
    default: "",
    trim: true
  }
}, {timestamps: true})
module.exports = mongoose.model('Player', PlayerSchema);
