const userController = require('../controllers/users.js')
module.exports = function(app){
    app.get('/', userController.index),
    app.get('/register', userController.registerPage),
    app.post('/register', userController.register),
    app.post('/login', userController.login),
    app.get('/home', userController.homePage),
    app.get('/logout', userController.logout)
}; 