const player = require('../controllers/player.controller')
module.exports = (app) => {
    app.get('/players/all', player.index),
    app.get('/players/:playerId', player.thisPlayer),
    app.post('/players/new', player.new),
    app.put('/players/:playerId', player.update),
    app.delete('/players/:playerId', player.remove)
};
