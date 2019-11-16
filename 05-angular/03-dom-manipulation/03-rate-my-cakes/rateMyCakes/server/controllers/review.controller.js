const Review = require('../models/review.models');
module.exports = {
  index: (request, response) => {
    Review.find()
      .then(allReviews => response.json(allReviews))
      .catch(err => response.json(err));
  },
  new: (request, response) => {
    Review.create(request.body)
      .then(newReview => {
        response.json(newReview)
      })
      .catch(err => response.json(err));
  },
  thisCakesReviews: (request, response) => {
    const id = request.params.id;
    Review.find({cake:id})
      .then(reviews => response.json(reviews))
      .catch(err => response.json(err));
  }

}
