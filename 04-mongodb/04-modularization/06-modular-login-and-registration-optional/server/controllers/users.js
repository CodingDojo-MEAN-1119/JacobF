const User = require('../models/user.js')
module.exports = {
    index: (request, response) => {
        if('user' in request.session){
            User.findOne({username: request.session.user})
                .then(this_user=>{
                    response.render('home', { this_user })
                })
                .catch(err=>{
                    console.log(err)
                });
        } else{
            response.render('index', { formData: request.body })
        }
    },
    registerPage: (request, response) => {
        if('user' in request.session){
            User.findOne({username: request.session.user})
                .then(this_user=>{
                    response.render('home', { this_user })
                })
                .catch(err=>{
                    console.log(err)
                });
        } else{
            response.render('register', { formData: request.body })        
        }
    },
    register: (request, response) => {
        User.find()
        User.create(request.body)
            .then(new_user=>{
                response.redirect('/')
            })
            .catch(err=>{
                for (var key in err.errors) {
                    console.log(err.errors[key].message)
                    request.flash('registration', err.errors[key].message);
                }
                response.render('register', { formData: request.body })
            });
    },
    login: (request, response) => {
        const username = request.body.username
        User.findOne({username:username})
            .then(this_user=>{
                if(this_user.password == request.body.password){
                    request.session.id = this_user._id
                    request.session.user = this_user.username
                    return response.redirect('/home')
                } else {
                    request.flash('login', "Invalid account credentials")
                    return response.render('index', { formData: request.body })  
                }
            })  
            .catch(err=>{
                request.flash('login', "Invalid account credentials")
                response.render('index', { formData: request.body })                
            });
    },
    logout: (request, response) => {
        if ('user' in request.session){
            request.session.destroy()
            response.redirect('/')
        } else {
            response.redirect('/')
        }
    },
    homePage: (request, response) => {
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
    }
};