const express = require("express")
const app =express()
// app.use(express.static(__dirname+"/build"))
const cors = require('cors')
const URI ="mongodb+srv://AfolabiPeace:afolabipeace@cluster0.na8am.mongodb.net/instagram_db?retryWrites=true&w=majority"
const mongoose = require("mongoose")
mongoose.connect(URI,(err)=>{
    if(err){
        console.log("Mongoose no connece")
        console.log(err)
    }else{
        console.log("mongoose has connext")
    }
})
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true,limit:"50mb"}))
app.use(bodyParser.json({limit:"50mb"}))
app.use(cors())
require("dotenv").config()
const PORT = process.env.PORT|| 4200
const userRouter = require("./routes/user.route")
app.use("/",userRouter)
app.listen(PORT,()=>{
    console.log(`my app is listen on port : ${PORT} `)
})