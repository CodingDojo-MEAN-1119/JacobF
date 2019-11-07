const mongoose = require('mongoose');
const QuoteSchema = new mongoose.Schema({
    posted_by: {type: String},
    quote: {type: String}
}, {timestamps: true})

module.exports = mongoose.model('Quote', QuoteSchema);