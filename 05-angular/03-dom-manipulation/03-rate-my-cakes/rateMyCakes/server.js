// EXPRESS SETUP //
const express = require('express');
const app = express();
const server = app.listen(8000);
// EXPRESS MIDDLEWARE + SERVE STATIC FILES //
const bodyParser = require('body-parser');
app.use(express.static( __dirname + '/dist/rateMyCakes'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// SERVER-SIDE SCRIPT + MONGOOSE //
require('./server/config/mongoose.js')
require('./server/routes/cake.routes')(app)
require('./server/routes/review.routes')(app)

