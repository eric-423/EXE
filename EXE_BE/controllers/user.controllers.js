const { User } = require('../models')
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')
const { Role } = require('../models')
require('dotenv').config();

const registerCustomer = async (req, res) => {
    const { fullName, email, password, dateOfBirth, note } = req.body
    try {
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt)
        const newUser = await User.create({ fullName, email, password: hashPassword, status: true, dateOfBirth, note, isBan: false, roleId: 6 })
        res.status(201).send(newUser)
    } catch (error) {
        console.log(error);

        res.status(500).send(error)
        console.log(error.body);
    }
}

const registerWorker = async (req, res) => {
    const { fullName, email, password, dateOfBirth, note, roleId } = req.body
    try {
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt)
        const newUser = await User.create({ fullName, email, password: hashPassword, status: true, dateOfBirth, note, isBan: false, roleId: 6 })
        res.status(201).send(newUser)
    } catch (error) {
        console.log(error);

        res.status(500).send(error)
        console.log(error.body);
    }
}

const login = async (req, res) => {
    const { email, password } = req.body
    const key = process.env.SECURITY_KEY
    try {
        const peopleFind = await User.findOne({
            where: {
                email
            },
            include: {
                model: Role,
                as: "role"
            }
        })
        if (peopleFind) {

            const isAuth = bcrypt.compareSync(password, peopleFind.password)
            if (isAuth) {
                const token = jwt.sign({ email: peopleFind.email, role: peopleFind.role.name }, key, { expiresIn: 60 * 60 })
                res.status(200).send(token)
            } else {
                res.status(500).send("Login Failed")
            }
        } else {
            res.status(404).send("User Not Found")
        }
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }


}

const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body)
        return res.status(201).send(user)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findAllUser = async (req, res) => {
    try {
        const users = await User.findAll()
        return res.status(200).send(users)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findUserById = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findOne({
            where: {
                id
            }
        })

        if (!user) {
            return res.status(404).send("User not found");
        }

        res.status(200).send(user)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const updateUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findOne({
            where: {
                id
            }
        })

        if (!user) {
            return res.status(404).send("User not found");
        }

        user.save(req.body)

        return res.status(200).send(role)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.destroy({
            where: {
                id
            }
        })
        if (!user) {
            return res.status(404).send("User not found");
        }

        return res.status(200).send(user)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

module.exports = {
    registerWorker, registerCustomer, login
}