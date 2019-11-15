const mongoose = require('mongoose');
const CakeSchema = mongoose.Schema({
  baker: {
    type: String,
    required: true,
    trim: true
  },
  imageUrl: {
    type: String,
    required: true,
    trim: true
  }
}, {timestamps: true});
module.exports = mongoose.model('Cake', CakeSchema);
