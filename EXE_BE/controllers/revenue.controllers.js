const Revenue = require('../models')

const createRevenue = async (req, res) => {
    try {
        const revenue = await Revenue.create(req.body)
        return res.status(201).send(product)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findAllRevenue = async (req, res) => {
    try {
        const revenues = await Revenue.findAll()
        return res.status(200).send(revenues)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findRevenueById = async (req, res) => {
    try {
        const { id } = req.params
        const revenue = await Revenue.findOne({
            where: {
                id
            }
        })

        if (!product) {
            return res.status(404).send("Revenue not found");
        }

        res.status(200).send(revenue)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const updateRevenue = async (req, res) => {
    try {
        const { id } = req.params
        const revenue = await Revenue.findOne({
            where: {
                id
            }
        })

        if (!revenue) {
            return res.status(404).send("Revenue not found");
        }

        Revenue.save(req.body)

        return res.status(200).send(revenue)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const deleteRevenue = async (req, res) => {
    try {
        const { id } = req.params
        const revenue = await Revenue.destroy({
            where: {
                id
            }
        })
        if (!revenue) {
            return res.status(404).send("Revenue not found");
        }

        return res.status(200).send(revenue)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}