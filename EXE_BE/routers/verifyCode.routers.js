const express = require('express')
const verifyCodeRouter = express.Router()
const { generateCode, verifyPhoneCode } = require('../controllers/verifyCodes.controllers')

verifyCodeRouter.post("/generate-code", generateCode)
verifyCodeRouter.post("/verify-phone-code", verifyPhoneCode)

module.exports = { verifyCodeRouter }