const User = require('../models/User')

const userController = {
    index: (req, res) => {
        User.find()
        .then(user => {
            res.send(user)
        })
        .catch(err => console.log(err))
    },
    show: (req, res) => {
        User.findById(req.params.userId).populate('decks')
        .then(user => {
            res.send(user)
        }).catch(err => console.log(err))
    },
    create: (req, res) => {
        User.create(req.body)
        .then(() => res.redirect('/api/users'))
        .catch(err => console.log(err))
    },
    update: (req, res) => {
        User.findByIdAndUpdate(req.params.userId, req.body, {new: true})
        .then(user => {
            res.send(user)
        }).catch(err => console.log(err))
    },
    delete: (req, res) => {
        User.findByIdAndDelete(req.params.userId)
        .then(() => {
            res.send(200)
            res.redirect('/api/users')
        })
    }
}

module.exports = userController