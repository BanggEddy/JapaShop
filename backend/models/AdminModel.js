const mongoose = require('mongoose')
const AdminTemplate = new mongoose.Schema({
    //What u collect from the user: (the DataBases)
    usernameadmin:{
        type:String,
        required:true,
    },
    passwordadmin:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
})

module.exports = mongoose.model('users', AdminTemplate )