const express = require('express')
const { branchRouter } = require('./branch.routers')
const { materialTypeRouter } = require('./materialtype.routers')

const rootRouter = express.Router()

rootRouter.use("/branch", branchRouter)
rootRouter.use("material-type", materialTypeRouter)
module.exports = {
    rootRouter
}