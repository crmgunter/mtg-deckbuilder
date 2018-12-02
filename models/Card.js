const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Card = new Schema({
    name: String,
    image: String,
    description: String,
    color: String
})

module.exports = mongoose.model('Card', Card)