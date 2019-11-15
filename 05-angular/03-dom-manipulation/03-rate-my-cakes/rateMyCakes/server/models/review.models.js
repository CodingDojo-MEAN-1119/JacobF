const mongoose = require('mongoose');
const ReviewSchema = mongoose.Schema({
  starRating: {
    type: Number,
    required: true
  },
  comment: {
    type: String,
    trim: true
  }
}, {timestamps:true});
module.exports = mongoose.model('Review', ReviewSchema);
