const jwt = require('jsonwebtoken')
require('dotenv').config();

const authenticate = (req, res, next) => {
    try {
        const token = req.header("token")
        const key = process.env.SECURITY_KEY
        const decode = jwt.verify(token, key)

        if (decode) {
            req.user = decode
            return next()
        } else {
            return res.status(401).send("You are not login")
        }
    } catch (error) {
        return res.status(401).send("You are not login")
    }
}

module.exports = {
    authenticate
}