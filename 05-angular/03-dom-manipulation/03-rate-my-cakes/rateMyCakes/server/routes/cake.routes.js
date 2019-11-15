const cakeController = require('../controllers/cake.controller');
module.exports = (app) => {
  app.get('/cakes', cakeController.index),
  app.post('/cakes/new', cakeController.new)
};
