const Role = require('../models')

const createRole = async (req, res) => {
    try {
        const role = await Role.create(req.body)
        return res.status(201).send(role)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findAllRole = async (req, res) => {
    try {
        const role = await Role.findAll()
        return res.status(200).send(role)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findRoleById = async (req, res) => {
    try {
        const { id } = req.params
        const role = await Role.findOne({
            where: {
                id
            }
        })

        if (!role) {
            return res.status(404).send("Role not found");
        }

        res.status(200).send(role)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const updateRole = async (req, res) => {
    try {
        const { id } = req.params
        const role = await Role.findOne({
            where: {
                id
            }
        })

        if (!role) {
            return res.status(404).send("Role not found");
        }

        Role.save(req.body)

        return res.status(200).send(role)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const deleteRole = async (req, res) => {
    try {
        const { id } = req.params
        const role = await Role.destroy({
            where: {
                id
            }
        })
        if (!role) {
            return res.status(404).send("Role not found");
        }

        return res.status(200).send(role)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}