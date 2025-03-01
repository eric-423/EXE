require('dotenv').config();

const authorie = (arrayType) => (req, res, next) => {
    const { user } = req
    if (arrayType.findIndex((ele) => ele === user.role) > -1) {
        req.user = user
        next()
    } else {
        res.status(403).send("You are not allow")
    }
}

module.exports = {
    authorie
}