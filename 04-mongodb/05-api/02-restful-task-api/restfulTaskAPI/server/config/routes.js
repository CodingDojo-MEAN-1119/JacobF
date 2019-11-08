const taskController = require('../controllers/tasks.js')
module.exports = (app) => {
    app.get('/', taskController.index),
    app.get('/:taskID', taskController.thisTask),
    app.post('/', taskController.new),
    app.put('/:taskID', taskController.update),
    app.delete('/:taskID', taskController.remove)
};