const express = require('express')
const router = express.Router()
const applicationController = require('../controllers/application')
const userController = require('../controllers/userController')
const deckController = require('../controllers/deckController')
const cardController = require('../controllers/cardController')

router.get('/', applicationController.index)

router.get('/users', userController.index)
router.get('/users/:userId', userController.show)
router.post('/users', userController.create)
router.patch('/users/:userId', userController.update)
router.delete('/users/:userId', userController.delete)

router.get('/users/:userId/decks', deckController.index)
router.get('/users/:userId/decks/:deckId', deckController.show)
router.post('/users/:userId/decks', deckController.create)
router.patch('/users/:userId/decks/:deckId', deckController.update)
router.delete('/users/:userId/decks/:deckId', deckController.delete)

router.get('/users/:userId/decks/:deckId/cards', cardController.index)
router.get('/users/:userId/decks/:deckId/cards/:cardId', cardController.show)
router.post('/users/:userId/decks/:deckId/cards', cardController.create)
router.patch('/users/:userId/decks/:deckId/cards/:cardId', cardController.update)
router.delete('/users/:userId/decks/:deckId/cards/:cardId', cardController.delete)

module.exports = router
