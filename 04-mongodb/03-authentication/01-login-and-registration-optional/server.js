// EXPRESS SETUP //
const express = require('express');
const app = express();
const server = app.listen(8000);
// EXPRESS MIDDLEWARE + SERVE STATIC FILES //
const session = require('express-session');
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));
const flash = require('express-flash');
app.use(flash());
app.use(express.static(__dirname + '/static'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));
// MONGOOSE SETUP //
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/login_app_db', {useNewUrlParser: true});
// MONGOOSE MODELS //
const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        minlength: [3, "Required username length: 3-20"],
        maxlength: [20, "Required username length: 3-20"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        maxlength: [65, "Email must not exceed 65 characters"],
        trim: true
    },
    first_name: {
        type: String,
        required: [true, "First name is required"],
        minlength: [1, "Required first name length: 1-25"],
        maxlength: [25, "Required first name length: 3-25"],
        trim: true
    },
    last_name: {
        type: String,
        required: [true, "Last name is required"],
        minlength: [1, "Required last name length: 1-25"],
        maxlength: [25, "Required last name length: 3-25"],
        trim: true
    },
    password: {
        type: String,
        required: [true, "A valid password is required"],
        minlength: [4, "Required password length: 4-30"],
        maxlength: [30, "Required password length: 4-30"],
        trim: true
    }
}, {timestamps: true})
const User = mongoose.model('User', UserSchema);
//END OF SETUP//

// SERVER SIDE SCRIPT //
app.get('/', (request, response) => {
    if('user' in request.session){
        User.findOne({username: request.session.user})
            .then(this_user=>{
                response.render('home', { this_user })
            })
            .catch(err=>{
                console.log(err)
            });
    } else{
        response.render('index')
    }
});
app.get('/register', (request, response) => {
    if('user' in request.session){
        User.findOne({username: request.session.user})
            .then(this_user=>{
                response.render('home', { this_user })
            })
            .catch(err=>{
                console.log(err)
            });
    } else{
        response.render('register')        
    }
});
app.post('/register', (request, response) => {
    User.create(request.body)
        .then(new_user=>{
            response.redirect('/')
        })
        .catch(err=>{
            console.log(err.code)
            for (var key in err.errors) {
                console.log(err.errors[key].message)
                request.flash('registration', err.errors[key].message);
            }
            response.redirect('/register')
        });
});
app.post('/login', (request, response) => {
    const username = request.body.username
    User.findOne({username:username})
        .then(this_user=>{
            if(this_user.password == request.body.password){
                request.session.id = this_user._id
                request.session.user = this_user.username
                return response.redirect('/home')
            } else {
                request.flash('login', "Invalid account credentials")
                response.redirect('/')
            }
        })  
        .catch(err=>{
            console.log(err)
            request.flash('login', "Invalid account credentials")
            response.redirect('/')
        });
});
app.get('/home', (request, response) => {
    if ('user' in request.session){
        User.findOne({username: request.session.user})
            .then(this_user=>{
                response.render('home', { this_user })
            })
            .catch(err=>{
                console.log(err)
            });
    } else {
        response.redirect('/')
    }
}); 
app.get('/logout', (request, response) => {
    if ('user' in request.session){
        request.session.destroy()
        response.redirect('/')
    } else {
        response.redirect('/')
    }
});
