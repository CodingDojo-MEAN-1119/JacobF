const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + "/views");
app.use(express.static(__dirname + "/static"));

app.get('/', (request, response) => {
    response.render('index')
});
app.get('/cars', (request, response) => {
    response.render('cars')
});
app.get('/cats', (request, response) => {
    response.render('cats')
});
app.get('/cat1', (request, response) => {
    var cat1 = {
        name: "Cuddles",
        age: 4,
        favorite_foods: ["Spaghetti", "Meatballs"],
        picture: "/images/cat1.jpg"
    }
    response.render('details', {cat: cat1})
});
app.get('/cat2', (request, response) => {
    var cat2 = {
        name: "Hamish",
        age: 7,
        favorite_foods: ["Tuna", "Salmon"],
        picture: "/images/cat2.jpg"
    }
    response.render('details', {cat: cat2})
});
app.get('/cat3', (request, response) => {
    var cat3 = {
        name: "Fred and Sandy",
        age: 11,
        favorite_foods: ["Steak", "Shrimp"],
        picture: "/images/cat3.jpg"
    }
    response.render('details', {cat: cat3})
});
app.get('/cars/new', (request, response) => {
    response.render('form')
});
app.listen(8000);