const { where } = require('sequelize');
const UtensilsType = require('../models')

const createUtensilsType = async (req, res) => {
    try {
        const utensilsType = await UtensilsType.create(req.body)
        return res.status(201).send(utensilsType)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findAllUtensilsTyoe = async (req, res) => {
    try {
        const utensilsTypes = await UtensilsType.findAll()

        return res.status(200).send(utensilsTypes)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findUtensilsTypeById = async (req, res) => {
    try {
        const { id } = req.params
        const utensilsType = await UtensilsType.findOne({
            where: {
                id
            }
        })

        if (!utensilsType) {
            return res.status(404).send("Utensils Type not found");
        }

        res.status(200).send(utensilsType)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const updateUtensilsType = async (req, res) => {
    try {
        const { id } = req.params
        const utensilsType = await UtensilsType.findOne({
            where: {
                id
            }
        })

        if (!utensilsType) {
            return res.status(404).send("Utensils Type not found");
        }

        utensilsType.save(req.body)

        return res.status(200).send(utensilsType)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const deleteUtensilsType = async (req, res) => {
    try {
        const { id } = req.params
        const utensilsType = await UtensilsType.destroy({
            where: {
                id
            }
        })
        if (!utensilsType) {
            return res.status(404).send("Utensils Type not found");
        }

        return res.status(200).send(utensilsType)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}