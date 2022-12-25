const cardModel = require('../model/cardModel')
let {isValidName,isValidBody,isValidateCardType,isValidateStatus,isValidObjectId,isValidphone,isValidEmail,isValidRequestBody} = require('../validation/validation')
exports.createCard = async function(req,res){
   try {
    let data = req.body
    let {cardNumber,cardType,customerName,status,vision,customerID}=data
   
    if(!customerName) return res.status(400).send({status:false,message:"Please enter customerName"})
    if(!cardType) return res.status(400).send({status:false,message:"Please enter cardType"})
    if(!customerID) return res.status(400).send({status:false,message:"Please enter customerID"})
    if(!isValidName(customerName))return res.status(400).send({status:false,message:"Please provide only alpha value in customerName"})
    if(!isValidateCardType(cardType)) return res.status(400).send({status:false,message:"Please provide valid cardType"})
    if(status){
        if(!isValidateStatus(status)) return res.status(400).send({status:false,message:"Please provide valid status"})
    }
    let checkCustomerId = await cardModel.findOne({customerID:customerID})
    if(!checkCustomerId) return res.status(400).send({status:false,message:"CustomerId is not present in db"})
    let cardlen= await cardModel.find()
    let obj ={
        cardNumber:`C00${++cardlen.length}`,
        cardType:cardType,
        customerName:customerName,
        customerID:customerID
    }

    await cardModel.create(obj)
    let findCard = await cardModel.find()
 
    return res.status(201).send({status:true,data:findCard})
}catch(err){
    return res.status(500).send({status:false,message:err.message})
}
}










