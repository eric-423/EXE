const Information = require('../models')

const createInformation = async (req, res) => {
    try {
        const information = await Information.create(req.body)
        return res.status(201).send(information)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findAllInformation = async (req, res) => {
    try {
        const informations = await Information.findAll()
        return res.status(200).send(informations)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findInformationById = async (req, res) => {
    try {
        const { id } = req.params
        const information = await Information.findOne({
            where: {
                id
            }
        })

        if (!information) {
            return res.status(404).send("Information not found");
        }

        res.status(200).send(information)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const updateInformation = async (req, res) => {
    try {
        const { id } = req.params
        const information = await Information.findOne({
            where: {
                id
            }
        })

        if (!information) {
            return res.status(404).send("Information not found");
        }

        Information.save(req.body)

        return res.status(200).send(information)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const deleteInformation = async (req, res) => {
    try {
        const { id } = req.params
        const information = await Information.destroy({
            where: {
                id
            }
        })
        if (!information) {
            return res.status(404).send("Information not found");
        }

        return res.status(200).send(information)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}