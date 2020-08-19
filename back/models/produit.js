const mongoose = require ('mongoose')
const schema = mongoose.Schema

const ProductSchema = new schema(
    {
        nom: String,
        prix: Number,
        Qtt: Number

    }
    )
module.exports= mongoose.model('Product',ProductSchema)