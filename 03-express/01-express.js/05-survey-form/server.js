const express = require('express');
const app = express();
const session = require('express-session');
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.use(express.static(__dirname + '/static'));
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));
app.use(express.urlencoded({extended: true}));

app.get('/', (request, response) => {
    response.render('index')
});
app.post('/result', (request, response) => {
    results = request.body
    response.render('result', {results: results})
});
app.listen(8000);