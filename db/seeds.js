const User = require('../models/User')
const Deck = require('../models/Deck')
const Card = require('../models/Card')

const island = new Card({
    name: 'island',
    image: 'https://i.pinimg.com/originals/79/2d/e2/792de237a9b090d13a74a03a0469be4e.jpg',
    description: 'its a island',
    color: 'blue'
})

const mountain = new Card({
    name: 'mountain',
    image: 'https://images-na.ssl-images-amazon.com/images/I/51NCijFuRqL.jpg',
    description: 'its a island',
    color: 'blue'
})

const deckOne = new Deck({
    name: 'test deck',
    image: 'https://i.pinimg.com/originals/79/2d/e2/792de237a9b090d13a74a03a0469be4e.jpg',
    type: 'mana deck',
    cards: [island, mountain]
})

const cameron = new User({
    username: 'cameron',
    image: '',
    bio: 'test',
    decks: [deckOne]
})

User.remove()
.then(() => Deck.remove())
.then(() => Card.remove())
.then(() => Deck.create([deckOne]))
.then(() => Card.insertMany([island, mountain]))
.then(() => cameron.save())
.then(() => {
    console.log('successful saved')
})
.catch((err) => {
    console.log(err)
})