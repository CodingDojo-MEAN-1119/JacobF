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
var count = 0
io.on('connection', (socket) => {

    socket.emit('count', {count: count})

    socket.on('count_one_up', () => {
        count += 1
        io.emit('update_count', {count: count})
    });

    socket.on('reset_counter', () => {
        count = 0
        io.emit('update_count', {count: count})
    });

});