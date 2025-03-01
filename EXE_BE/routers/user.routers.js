const express = require('express')
const userRouter = express.Router()
const { login, registerWorker, registerCustomer, changeCustomerPassword } = require('../controllers/user.controllers')
const { authorie } = require('../middlewares/auth/authorize')
userRouter.post("/sign-in", login)
const { authenticate } = require('../middlewares/auth/authenticate')

userRouter.post("/sign-up/customer", registerCustomer)

userRouter.post("/sign-up/worker", authenticate, authorie(["ADMIN"]), registerWorker)
userRouter.post("/change-pass", authenticate, authorie(["CUSTOMER"]), changeCustomerPassword)

module.exports = {
    userRouter
}