const Quote = require('../models/quote')
module.exports = {
    index: function(request, response) {
        response.render('index')    	
    },
    quoteAdd: function(request, response) {
        Quote.create(request.body)
        .then(response.redirect('/quotes'))
        .catch(err => response.json(err));
    },
    quotes_page: function(request, response) {
    	Quote.find({}).sort({createdAt: 'desc'})
            .then(quotes => {
                response.render('quotes', {all_quotes: quotes})
            })
            .catch(err => response.json(err))
    }
};