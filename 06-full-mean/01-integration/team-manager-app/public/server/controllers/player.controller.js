const Player = require('../models/player.models')
module.exports = {
    index: (request, response) => {
        Player.find()
            .then(allPlayers => {
                response.json(allPlayers)
            })
            .catch(err => {
                response.json(err)
            });
    },
    thisPlayer: (request, response) => {
        const playerId = request.params.playerId;
        Player.findById(playerId)
            .then(thisPlayer => {
                response.json(thisPlayer)
            })
            .catch(err=> {
                response.json(err)
            });
    },
    new: (request, response) => {
        Player.create(request.body)
            .then(thisPlayer => {
                response.json(thisPlayer)
            })
            .catch(err=>{
                response.json(err)
            });
    },
    update: (request, response) => {
        const playerId = request.params.playerId;
        Player.findByIdAndUpdate(playerId, request.body, { new: true })
            .then(thisPlayer => {
                response.json(thisPlayer)
            })
            .catch(err => {
                response.json(err)
            });
    },
    remove: (request, response) => {
        const playerId = request.params.playerId;
        Player.findByIdAndRemove(playerId)
            .then(thisPlayer => {
                response.json(thisPlayer)
            })
            .catch(err=> {
                response.json(err)
            });
    }
};
