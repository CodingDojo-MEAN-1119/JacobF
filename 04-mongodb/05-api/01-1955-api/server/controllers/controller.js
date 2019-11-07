const Person = require('../models/1955_api_db.js')
module.exports = {
    index: (request, response) => {
        Person.find()
            .then(allPersonEntries => {
                console.log("Responded with JSON")
                response.json(allPersonEntries)
            })
            .catch(err => {
                console.log('Caught errors')
                response.json(err)
            });
    },
    new: (request, response) => {
        const name = request.params.name;
        Person.create({name: name})
            .then(() => {
                response.redirect('/')
            })
            .catch(err=>{
                response.json(err)
            });
    },
    remove: (request, response) => {
        const name = request.params.name;
        Person.remove({name: name})
            .then(() => {
                response.redirect('/')
            })
            .catch(err=> {
                response.json(err)
            });
    },
    thisEntry: (request, response) => {
        const name = request.params.name;
        Person.find({name:name})
            .then(thisEntry => {
                response.json(thisEntry)
            })
            .catch(err=> {
                response.json(err)
            });
    }
};