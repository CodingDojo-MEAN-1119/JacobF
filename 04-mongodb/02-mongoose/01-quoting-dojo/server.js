//EXPRESS SETUP//
const express = require('express');
const app = express();
//EXPRESS MIDDLEWARE + SERVE FILES //
const flash = require('express-flash');
const session = require('express-session');
app.use(flash());
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));
app.use(express.static(__dirname + '/static'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true})); 
//MONGODB + MONGOOSE MODELS//
//setup
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quotes_db', {useNewUrlParser: true});
//models
const QuoteSchema = new mongoose.Schema({
    posted_by: {type: String},
    quote: {type: String}
   }, {timestamps: true})
const Quote = mongoose.model('Quote', QuoteSchema);

//SERVER SIDE SCRIPT//
app.get('/', (request,response) => {
    response.render('index')
});
app.post('/quotes_add', (request,response) => {
    Quote.create(request.body)
        .then(response.redirect('/quotes'))
        .catch(err => res.json(err));
});
app.get('/quotes', (request, response) => {
    Quote.find({}).sort({createdAt: 'desc'})
        .then(quotes => {
            response.render('quotes', {all_quotes: quotes})
        })
        .catch(err => res.json(err))
});
app.listen(8000)    