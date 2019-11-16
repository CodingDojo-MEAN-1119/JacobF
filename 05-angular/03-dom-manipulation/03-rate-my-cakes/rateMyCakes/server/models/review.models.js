const mongoose = require('mongoose');
const ReviewSchema = mongoose.Schema({
  cake: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cake',
    required: true
  },
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
