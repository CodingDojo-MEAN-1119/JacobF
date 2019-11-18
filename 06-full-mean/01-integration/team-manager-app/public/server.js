// EXPRESS SETUP //
const express = require('express');
const app = express();
const server = app.listen(8000);
// EXPRESS MIDDLEWARE + SERVE STATIC FILES //
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// ANGULAR //
app.use(express.static(__dirname + '/dist/public'));
app.all('*', (request, response, next) => {
  response.sendFile(path.resolve("./dist/public/index.html"))
});

// SERVER-SIDE SCRIPT + MONGOOSE //
require('./server/config/mongoose.js')
require('./server/routes/player.routes')(app)


