const entryController = require('../controllers/controller.js')
module.exports = (app) => {
    app.get('/', entryController.index),
    app.get('/new/:name', entryController.new),
    app.get('/remove/:name', entryController.remove),
    app.get('/:name', entryController.thisEntry)
};