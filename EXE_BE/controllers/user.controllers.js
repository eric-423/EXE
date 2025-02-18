const User = require('../models')

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