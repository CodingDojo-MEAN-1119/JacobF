//EXPRESS SETUP//
const express = require('express');
const app = express();
//EXPRESS MIDDLEWARE + SERVE FILES //
app.use(express.static(__dirname + '/static'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));

//SERVER SIDE SCRIPT//
require('./server/config/mongoose.js')
require('./server/config/routes.js')(app)
app.listen(8000)    