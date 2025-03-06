const express = require('express')
const { branchRouter } = require('./branch.routers')
const { materialTypeRouter } = require('./materialType.routers')
const { userRouter } = require('./user.routers')
const { productRouter } = require('./product.routers')
const { verifyCodeRouter } = require('./verifyCode.routers')
const rootRouter = express.Router()

rootRouter.use("/branch", branchRouter)
rootRouter.use("/material-type", materialTypeRouter)
rootRouter.use('/users', userRouter)
rootRouter.use('/products', productRouter)
rootRouter.use('/verify-code', verifyCodeRouter)

module.exports = {
    rootRouter
}