const quotesController = require('../controllers/quotes.js')
module.exports = function(app){
    app.get('/',  quotesController.index),
    app.post('/quotes_add', quotesController.quoteAdd),
    app.get('/quotes', quotesController.quotes_page)
};       