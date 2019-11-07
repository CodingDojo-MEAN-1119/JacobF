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

//SERVER SIDE SCRIPT//
require('./server/config/mongoose.js')
require('./server/config/routes.js')(app)
app.listen(8000)    