const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const cardSchema = new mongoose.Schema({
    cardNumber :{type:String,require:true},
    cardType:{type:String,enum:["REGULAR","SPECIAL"],require:true},
    customerName:{type:String,require:true},
    status:{type:String,default:"ACTIVE",enum:["ACTIVE","INACTIVE"]},
    vision:{type:String},
    customerID:{type:String,ref:"customer",require:true}
},{timestamps:true})

module.exports= mongoose.model("card",cardSchema)








