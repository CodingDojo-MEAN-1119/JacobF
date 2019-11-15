const Cake = require('../models/cake.models');
module.exports = {
  index: (request, response) => {
    Cake.find()
      .then(allCakes =>{
        response.json(allCakes)
      })
      .catch(err => response.json(err))
  },
  new: (request, response) => {
    Cake.create(request.body)
      .then(thisCake => response.json(thisCake))
      .catch(err => response.json(err))
  },
};
