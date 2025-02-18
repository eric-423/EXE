const { MaterialType } = require('../models')

const createMaterialType = async (req, res) => {
    try {
        const metarialType = MaterialType.create(req.body)
        res.status(201).send(metarialType)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findAllMaterialType = (req, res) => {
    try {
        const metarialTypes = MaterialType.findAll();
        res.status(200).send(metarialType)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findMaterialTypeById = (req, res) => {
    try {
        const { id } = req.params
        const metarialType = MaterialType.findById(id)
        res.status(200).send(metarialType)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const deleteMaterialType = (req, res) => {
    try {
        const { id } = req.params
        const metarialType = MaterialType.destroy({
            where: {
                id
            }
        })
        return res.status(200).send(metarialType)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const updateMaterialType = (req, res) => {
    try {
        const { id } = req.params
        const materialType = MaterialType.findOne({
            where: {
                id
            }
        })
        materialType.save(req.body)
        return res.status(200).send(metarialType)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}
