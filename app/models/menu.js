const mongoose = require('mongoose')
const Schema = mongoose.Schema

const menuSchema = new Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    size: { type: String, required: true },
    interior:{type:String},
    exterior:{type:String},
    
})

module.exports = mongoose.model('Menu', menuSchema)