const User = require("../models/User")
const Deck = require("../models/Deck")
const Card = require("../models/Card")

const cardController = {
  index: (req, res) => {
    Deck.findById(req.params.deckId)
      .populate("cards")
      .then(deck => res.send(deck.cards))
      .catch(err => console.log(err))
  },
  show: (req, res) => {
    Card.findById(req.params.cardId).then(card => res.send(card))
  },
  create: (req, res) => {
    Deck.findById(req.params.deckId)
      .populate("cards")
      .then(deck => {
        Card.create(req.body).then(card => {
          deck.cards.push(card)
          deck.save()
          res.redirect(
            `/api/users/${req.params.userId}/decks/${req.params.deckId}/cards`
          )
        })
      })
  },
  update: (req, res) => {
      Card.findByIdAndUpdate(req.params.cardId, req.body, {new: true})
      .then((card) => res.send(card))
  },
  delete: (req, res) => {
      Card.findByIdAndDelete(req.params.cardId)
      .then(() => res.send(200))
  }
}

module.exports = cardController
