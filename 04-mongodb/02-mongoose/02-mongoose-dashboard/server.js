//EXPRESS SETUP//
const express = require('express');
const app = express();
//EXPRESS MIDDLEWARE + SERVE FILES //
app.use(express.static(__dirname + '/static'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true})); 
//MONGODB + MONGOOSE MODELS//
//setup
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose_dashboard_db', {useNewUrlParser: true});
//models
const UserSchema = new mongoose.Schema({
    username: {type: String},
    lucky_number: {type: Number},
    fav_language: {type:String}
   }, {timestamps: true})
const User = mongoose.model('User', UserSchema);

//SERVER SIDE SCRIPT//
app.get('/', (request,response) => {
    User.find()
        .then(users=>{
            response.render('index', {all_users: users})
        })
        .catch(err=>{
            console.log(err)
        });
});
app.get('/user/add', (request,response) => {
    response.render('new_user')
});
app.post('/user/add/new', (request,response) => {
    User.create(request.body)
        .then(()=>{
            response.redirect('/')
        })
        .catch(err=>{
            console.log(err)
        });
});
app.get('/user/:username', (request,response) => {
    const username = request.params.username
    User.findOne({username: username})
        .then(this_user=>{
            response.render('user_page', {this_user: this_user})
        })
        .catch(err=>{
            console.log(err)
        });
});
app.get('/user/:username/edit', (request,response) => {
    const username = request.params.username
    User.findOne({username: username})
        .then(this_user=>{
            response.render('user_edit_page', {this_user: this_user})
        })
        .catch(err=>{
            console.log(err)
        });
});
app.post('/user/:username/edit/confirm', (request,response) => {
    const username = request.params.username
    User.findOne({username: username})
        .then(this_user=>{
            this_user.username = request.body.username
            this_user.lucky_number = request.body.lucky_number
            this_user.fav_language = request.body.fav_language
            this_user.save()
            response.redirect('/')
        })
        // .then(result=>{
        //     response.redirect(`/user/${username}`)
        // })
        //This doesn't load the updated username in time to load the user page again//
        .catch(err=>{
            console.log(err)
        });
});
app.get('/user/:username/delete', (request,response)=>{
    const username = request.params.username
    User.remove({username:username})
        .then(()=>{
            response.redirect('/')
        })
        .catch(err=>{
            console.log(err)
        });
});
app.listen(8000)    