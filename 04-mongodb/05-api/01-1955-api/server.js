// EXPRESS SETUP //
const express = require('express');
const app = express();
const server = app.listen(8000);
// EXPRESS MIDDLEWARE + SERVE STATIC FILES //
//app.use(express.urlencoded({extended: true})); Would only require this if we were using POST requests
app.use(express.json());

// SERVER-SIDE SCRIPT + MONGOOSE //
require('./server/config/mongoose.js')
require('./server/config/routes.js')(app)