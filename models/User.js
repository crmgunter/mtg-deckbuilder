const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const User = new Schema({
    username: String,
    image: String,
    bio: String,
    decks: [{
        type: Schema.Types.ObjectId,
        ref: 'Deck'
    }]
})

module.exports = mongoose.model('User', User)