const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Deck = new Schema ({
    name: String,
    image: String,
    type: String,
    cards: [{
        type: Schema.Types.ObjectId,
        ref: 'Card'
    }]
})

module.exports = mongoose.model('Deck', Deck)