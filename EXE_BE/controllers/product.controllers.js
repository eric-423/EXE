const { Product } = require('../models')

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
        const { sort, page = 1, limit = 10 } = req.query;

        const options = {
            order: [],
            limit: parseInt(limit, 10),
            offset: (page - 1) * limit,
        };

        if (sort) {
            const sortFields = sort.split('-').map(field => field.trim());
            const field = sortFields[0];
            const order = sortFields[1] === 'desc' ? 'DESC' : 'ASC';
            options.order.push([field, order]);
        }

        const products = await Product.findAll(options);
        const totalProducts = await Product.count();
        const totalPages = Math.ceil(totalProducts / limit);

        return res.status(200).send({
            products,
            pagination: {
                totalProducts,
                totalPages,
                currentPage: page,
                limit: limit,
            },
        });

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

module.exports = {
    findAllProduct
}