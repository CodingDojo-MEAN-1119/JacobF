const taskController = require('../controllers/tasks.js')
module.exports = (app) => {
    app.get('/tasks', taskController.index),
    app.get('/tasks/:taskID', taskController.thisTask),
    app.post('/tasks', taskController.new),
    app.put('/tasks/:taskID', taskController.update),
    app.delete('/tasks/:taskID', taskController.remove)
};
