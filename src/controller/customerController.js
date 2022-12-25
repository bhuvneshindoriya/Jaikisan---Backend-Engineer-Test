const customerModel = require('../model/customerModel')
const { v4: uuidv4 } = require('uuid');
//const crypto = require("crypto");
let {isValidName,isValidateStatus,isValidBody,isValidObjectId,isValidphone,isValidEmail,isValidRequestBody} = require('../validation/validation')

exports.createCustomer= async function(req,res){
    try{
        const data = req.body
    const {firstName,lastName,mobileNumber,DOB,emailID,customerID,status}=data

    if(req.body.customerID){
        await customerModel.deleteOne({customerID:req.body.customerID})
        return res.status(200).send({message:"deleted"})
     }
    if(mobileNumber){
        if(!isValidphone(mobileNumber)) return res.status(400).send({status:false,message:"Please provide valide MobileNumber"})
    }
    if(firstName){
        if(!isValidName(firstName))return res.status(400).send({status:false,message:"Please provide only alpha value in firstName"})
    }
    if(lastName){
        if(!isValidName(lastName))return res.status(400).send({status:false,message:"Please provide only alpha value in lastName"})
    }
    if(emailID){
        if(!isValidEmail(emailID))return res.status(400).send({status:false,message:"Please provide valid emailId"})
    }
    if(status){
        if(!isValidateStatus(status))return res.status(400).send({status:false,message:"Please provide valid status"})
    }
    let  checkEmail = await customerModel.findOne({emailID:emailID})
    if(checkEmail) return res.status(409).send({status:false,message:"Please enter new email"})
    let  checkMobile = await customerModel.findOne({mobileNumber:mobileNumber})
    if(checkMobile) return res.status(409).send({status:false,message:"Please enter new mobileNumber"})
    let obj ={
        firstName : firstName,
        lastName : lastName,
        mobileNumber:mobileNumber,
        DOB: DOB,
        emailID:emailID,
       // customerID:crypto.randomBytes(16).toString("hex"),
       customerID:uuidv4(),
       status:status
    }
    await customerModel.create(obj)
    let findCustomer = await customerModel.find({status:"ACTIVE"})
    
 
    return res.status(201).send({status:true,data:findCustomer})
}catch(error){
    return res.status(500).send({status:false,message:error.message})
}
}


