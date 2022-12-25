require ('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const route = require('./route/route')
const app = express()
app.use(express.json())
mongoose.set('strictQuery', false);
mongoose.connect(process.env.URL,{useNewUrlParser:true})
.then(()=>console.log("MongoDb is connected"))
.catch((err)=>console.log(err))

app.use('/',route)

app.listen(process.env.PORT||3000,function(){
    console.log("server run on -"+(process.env.PORT||3000));
})
