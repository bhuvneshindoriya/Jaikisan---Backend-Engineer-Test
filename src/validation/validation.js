const mongoose = require('mongoose')

const isValidRequestBody = function (requestBody) {
    return Object.keys(requestBody).length > 0;
}

function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email));
}

function isValidphone(phone) {
    const re = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/;
    return re.test(String(phone));
}
const isValidBody = function (Stringvalue) {
    if (typeof Stringvalue === "undefined" || Stringvalue === null) return false;
    if (typeof Stringvalue === "string" && Stringvalue.trim().length === 0) return false;
    return true;
  }
const isValidObjectId = (value) => { return mongoose.isValidObjectId(value) }

const isValidateStatus = (value) => { return ["ACTIVE","INACTIVE"].indexOf(value) !== -1 }
const isValidateCardType = (value) => { return ["REGULAR","SPECIAL"].indexOf(value) !== -1 }


const isValidName = (value) => { return (/^[A-Za-z]+$/).test(value)}

module.exports = {isValidName,isValidateCardType,isValidBody,isValidObjectId,isValidphone,isValidEmail,isValidRequestBody,isValidateStatus}