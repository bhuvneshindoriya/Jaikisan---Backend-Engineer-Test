const express = require('express')
const { createCard } = require('../controller/cardController')
const { createCustomer } = require('../controller/customerController')
const router = express.Router()


router.post('/create',createCustomer)
router.post('/card',createCard)



module.exports=router