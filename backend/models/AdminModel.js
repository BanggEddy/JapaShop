const mongoose = require('mongoose')
const AdminTemplate = new mongoose.Schema({
    //What u collect from the user: (the DataBases)
    fullNameadmin:{
        type:String,
        requrie:true,
    },
    usernameadmin:{
        type:String,
        required:true,
    },
    passwordadmin:{
        type:String,
        required:true,
    },
})

module.exports = mongoose.model('admin', AdminTemplate )