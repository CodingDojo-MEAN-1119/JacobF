const express = require('express');
const app = express();
const session = require('express-session');
const server = app.listen(8000);
const io = require('socket.io')(server);
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
//END OF SETUP//

//SERVER-SIDE-SCRIPT//
app.get('/', (request, response) => {
    response.render('index')
});
app.post('/result', (request, response) => {
    results = request.body
    response.render('result', {results: results})
});

//SOCKETS//
io.on('connection', function (socket) {
  
    socket.on("posting_form", function (data){
        var random_number = Math.floor((Math.random() * 1000) + 1);
        socket.emit('updated_message', {response: data}); 
        socket.emit('random_number', {response: random_number}); 
    });
      
});