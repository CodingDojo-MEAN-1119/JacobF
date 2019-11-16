const reviewController = require('../controllers/review.controller');
module.exports = (app) => {
  app.get('/reviews', reviewController.index),
  app.post('/reviews/new', reviewController.new),
  app.get('/reviews/:id', reviewController.thisCakesReviews)
};
