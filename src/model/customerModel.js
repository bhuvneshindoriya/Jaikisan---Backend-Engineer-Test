const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId
const customerSchema = new mongoose.Schema({
    firstName :{type:String,require:true},
    lastName:{type:String,require:true},
    mobileNumber:{type:String,require:true,unique:true},
    DOB:{type:String,require:true},
    emailID:{type:String,require:true,unique:true},
    customerID:{type:String,require:true,unique:true},
    status:{
        type:String,
        enum:["ACTIVE","INACTIVE"],
        require:true
    }

},{timestamps:true})
module.exports= mongoose.model("customer",customerSchema)











