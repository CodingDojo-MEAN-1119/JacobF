const Task = require('../models/task.js')
module.exports = {
    index: (request, response) => {
        Task.find()
            .then(allTasks => {
                response.json(allTasks)
            })
            .catch(err => {
                response.json(err)
            });
    },
    thisTask: (request, response) => {
        const taskID = request.params.taskID;
        Task.findById(taskID)
            .then(thisTask => {
                response.json(thisTask)
            })
            .catch(err=> {
                response.json(err)
            });
    },
    new: (request, response) => {
        Task.create(request.body)
            .then(thisTask => {
                response.json(thisTask)
            })
            .catch(err=>{
                response.json(err)
            });
    },
    update: (request, response) => {
        const taskID = request.params.taskID;
        Task.findByIdAndUpdate(taskID, request.body, { new: true })
            .then(thisTask => {
                response.json(thisTask)
            })
            .catch(err => {
                response.json(err)
            });
    },
    remove: (request, response) => {
        const taskID = request.params.taskID;
        Task.findByIdAndRemove(taskID)
            .then(thisTask => {
                response.json(thisTask)
            })
            .catch(err=> {
                response.json(err)
            });
    }
};