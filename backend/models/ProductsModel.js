const mongoose = require('mongoose')
const ProductsModel = new mongoose.Schema({
    //What u collect from the user: (the DataBases)
    nameproduct:{
        type:String,
        requrie:true,
    },
    imageproduct:{
        type:String,
        required:true,
    },
    descriptionproduct:{
        type:String,
        required:true,
        unique:true,
    },
    quantityprouct:{
        type:String,
        required:true,
    },
    dateproduct:{
        type:Date,
        default:Date.now,
    },
})

module.exports = mongoose.model('users', ProductsModel )