const ProductTypes = require('../models')

const createProductType = async (req, res) => {
    try {
        const productType = await ProductTypes.create(req.body)
        return res.status(201).send(productType)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findAllProductType = async (req, res) => {
    try {
        const productTypes = await ProductTypes.findAll()
        return res.status(200).send(productTypes)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findProductTypeById = async (req, res) => {
    try {
        const { id } = req.params
        const productType = await ProductTypes.findOne({
            where: {
                id
            }
        })

        if (!productType) {
            return res.status(404).send("Product Type not found");
        }

        res.status(200).send(productType)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const updateProductType = async (req, res) => {
    try {
        const { id } = req.params
        const productType = await ProductTypes.findOne({
            where: {
                id
            }
        })

        if (!productType) {
            return res.status(404).send("Product Type not found");
        }

        ProductTypes.save(req.body)

        return res.status(200).send(productType)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const deleteMaterial = async (req, res) => {
    try {
        const { id } = req.params
        const productType = await ProductTypes.destroy({
            where: {
                id
            }
        })
        if (!productType) {
            return res.status(404).send("Product Type not found");
        }

        return res.status(200).send(productType)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}