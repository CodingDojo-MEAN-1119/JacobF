const express = require("express");
const app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + "/static"));

app.get('/', (request, response) => {
   response.render('index');
});
app.get('/cars', (request, response) => {
    response.render('cars');
 });
 app.get('/cats', (request, response) => {
    response.render('cats');
 });
 app.get('/cars/new', (request, response) => {
    response.render('form');
 });
app.listen(8000);