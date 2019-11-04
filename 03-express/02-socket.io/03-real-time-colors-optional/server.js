const express = require('express');
const app = express();
const server = app.listen(8000);
const io = require('socket.io')(server);
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));    
//END OF SETUP

//SERVER SIDE SCRIPT//
app.get('/', (request, response) => {
    response.render('index')    
})
//SOCKETS//
var color = "red"
io.on('connection', (socket) => {

    socket.emit('color', {color: color})
    
    socket.on('bg_green', () => {
        color = "green"
        io.emit('update_color', {color: color})
    });

    socket.on('bg_blue', () => {
        color = "blue"
        io.emit('update_color', {color: color})
    });

    socket.on('bg_pink', () => {
        color = "pink"
        io.emit('update_color', {color: color})
    });

});