const express = require('express');
const app = express()
// other middleware + serve static files //
const server = app.listen(8000);
const io = require('socket.io')(server);
app.use(express.static(__dirname + '/static'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));    
//END OF SETUP//

//SERVER SIDE SCRIPT//
app.get('/', (request, response) => {
    response.render('index')
});

//CHAT ROOM APP//
const users = [];
const messages = [];

function isUser(user) {
    const usersCount = users.length;

    for (var i = 0; i < usersCount; i++) {
        if (user == users[i]) {
        return true;
        }
    }
    return false;
}
//SOCKETS FOR CHAT ROOM APP//
io.on('connection', (socket) => {

    // var online_users = 0;

    // socket.on('connected user', () => {
    //     online_users += 1;
    //     io.emit('update users online', {online_users: online_users})
    // });
    // socket.on('disconnected user', (data) => {
    //     for(var i = 0; i<users.length;i++){
    //         if(users[i] == data.user){
    //             users.splice(i, 1)
    //         }
    //     }
    //     online_users -= 1;
    //     io.emit('update users online', {online_users: online_users})
    // });
    // couldn't figure out the above code, so it is commented out, it was a bonus personal goal anyways//
    
    socket.on('new user', (data) => {
        if(isUser(data.username)){
            socket.emit('user exists', {errormsg: "Enter a unique username"})
            console.log(`${data.username} already exists`)
        }
        else {
            users.push(data.username)
            socket.emit('successful login', {current_user: data.username, messages: messages})
            console.log(`${data.username} has logged in successfully`)
        }
    });
    socket.on('new message', (data) => {
        messages.push({ posted_by: data.posted_by, message: data.message})
        io.emit('update messages', {message: data.message, posted_by: data.posted_by})
    });
    
});