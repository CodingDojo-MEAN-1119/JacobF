const User = require('../models/user.js')
module.exports = {
    index: (request, response) => {
        User.find()
            .then(users=>{
                response.render('index', {all_users: users})
            })
            .catch(err=>{
                console.log(err)
            });   	
    },
    newUserPage: (request, response) => {
        response.render('new_user')
    },
    createNewUser: (request, response) => {
        User.create(request.body)
        .then(()=>{
            response.redirect('/')
        })
        .catch(err=>{
            console.log(err)
        });
    },
    userPage: (request, response) => {
        const username = request.params.username
        User.findOne({username: username})
            .then(this_user=>{
                response.render('user_page', {this_user: this_user})
            })
            .catch(err=>{
                console.log(err)
            });
    },
    userEditPage: (request, response) => {
        const username = request.params.username
        User.findOne({username: username})
            .then(this_user=>{
                response.render('user_edit_page', {this_user: this_user})
            })
            .catch(err=>{
                console.log(err)
            });
    },
    userEditConfirm: (request, response) => {
        const username = request.params.username
        User.findOne({username: username})
            .then(this_user=>{
                this_user.username = request.body.username
                this_user.lucky_number = request.body.lucky_number
                this_user.fav_language = request.body.fav_language
                return this_user.save()
                .then(response.redirect(`/user/${this_user.username}`))
            })
            .catch(err=>{
                console.log(err)
            });
    },
    userDelete: (request, response) => {
        const username = request.params.username
        User.remove({username:username})
            .then(()=>{
                response.redirect('/')
            })
            .catch(err=>{
                console.log(err)
            });
    }
};