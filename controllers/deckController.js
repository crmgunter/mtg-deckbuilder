const Deck = require('../models/Deck')
const User = require('../models/User')

const deckController = {
    index: (req, res) => {
        User.findById(req.params.userId).populate('decks')
        .then((user) => {
            res.send(user.decks)
        })
    },
    show: (req, res) => {
        Deck.findById(req.params.deckId).populate('cards')
        .then(deck => res.send(deck))
    },
    create: (req, res) => {
        User.findById(req.params.userId)
        .then((user) => {
            Deck.create(req.body)
            .then(deck => {
                user.decks.push(deck)
                user.save()
                res.redirect(`/api/users/${req.params.userId}/decks`)
            })
        })
    },
    update: (req, res) => {
        Deck.findByIdAndUpdate(req.params.deckId, req.body, {new: true})
        .then((deck) => res.send(deck))
    },
    delete: (req, res) => {
        Deck.findByIdAndDelete(req.params.deckId)
        .then(() => {
            res.send(200)
            res.redirect(`/api/users/${req.params.userId}/decks`)
        })
    }
}

module.exports = deckController