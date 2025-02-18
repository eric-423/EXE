const Product = require('../models')

const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body)
        return res.status(201).send(product)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findAllProduct = async (req, res) => {
    try {
        const products = await Product.findAll()
        return res.status(200).send(products)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findProductById = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findOne({
            where: {
                id
            }
        })

        if (!product) {
            return res.status(404).send("Product not found");
        }

        res.status(200).send(product)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findOne({
            where: {
                id
            }
        })

        if (!product) {
            return res.status(404).send("Product not found");
        }

        Product.save(req.body)

        return res.status(200).send(product)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const deleteMaterial = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.destroy({
            where: {
                id
            }
        })
        if (!product) {
            return res.status(404).send("Product not found");
        }

        return res.status(200).send(product)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}