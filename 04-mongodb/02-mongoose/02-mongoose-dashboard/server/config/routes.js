const userController = require('../controllers/users.js')
module.exports = function(app){
    app.get('/', userController.index),
    app.get('/user/add', userController.newUserPage),
    app.post('/user/add/new', userController.createNewUser),
    app.get('/user/:username', userController.userPage),
    app.get('/user/:username/edit', userController.userEditPage),
    app.post('/user/:username/edit/confirm', userController.userEditConfirm),
    app.get('/user/:username/delete', userController.userDelete)
}; 