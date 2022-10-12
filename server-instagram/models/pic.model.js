const mongoose = require("mongoose")
const bcrypt = require('bcryptjs')

const picSchema= mongoose.Schema
({
        image : String,
        userId : String,
        created_at : String,
        username : String,
        fullname : String,
        caption : String,
})
const picModel = mongoose.model('pic_tb',picSchema)    
module.exports = picModel