const mongoose = require("mongoose")
const bcrypt = require('bcryptjs')
const proSchema= mongoose.Schema({
        image : String,
        userId : String,
        created_at : String,
        username : String,
        email : String,
    })
const proModel = mongoose.model('pro_tb',proSchema)
module.exports = proModel