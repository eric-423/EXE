const Contract = require('../models')

const createContract = async (req, res) => {
    try {
        const contract = await Contract.create(req.body)
        return res.status(201).send(contract)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findAllContract = async (req, res) => {
    try {
        const contract = await Contract.findAll()
        return res.status(200).send(contract)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findContractById = async (req, res) => {
    try {
        const { id } = req.params
        const contract = await Contract.findOne({
            where: {
                id
            }
        })

        if (!contract) {
            return res.status(404).send("Contract not found");
        }

        res.status(200).send(contract)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const updateContract = async (req, res) => {
    try {
        const { id } = req.params
        const contract = await Contract.findOne({
            where: {
                id
            }
        })

        if (!contract) {
            return res.status(404).send("Contract not found");
        }

        contract.save(req.body)

        return res.status(200).send(contract)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const deleteContract = async (req, res) => {
    try {
        const { id } = req.params
        const contract = await Contract.destroy({
            where: {
                id
            }
        })
        if (!contract) {
            return res.status(404).send("Contract not found");
        }

        return res.status(200).send(contract)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}