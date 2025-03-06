const express = require('express')
const { findAllProduct } = require('../controllers/product.controllers')

const productRouter = express.Router()

productRouter.get('/', findAllProduct)

module.exports = {
    productRouter
}