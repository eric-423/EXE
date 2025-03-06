const Order = require('../models')

const createOrder = async (req, res) => {
    try {

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findAllOrder = async (req, res) => {
    try {
        const orders = await Order.findAll()
        return res.status(200).send(orders)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findOrderById = async (req, res) => {
    try {
        const { id } = req.params
        const order = await Order.findOne({
            where: {
                id
            }
        })

        if (!order) {
            return res.status(404).send("order not found");
        }

        res.status(200).send(order)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const updateOrder = async (req, res) => {
    try {
        const { id } = req.params
        const order = await Order.findOne({
            where: {
                id
            }
        })

        if (!order) {
            return res.status(404).send("Order not found");
        }

        Order.save(req.body)

        return res.status(200).send(order)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const deleteOrder = async (req, res) => {
    try {
        const { id } = req.params
        const order = await Order.destroy({
            where: {
                id
            }
        })
        if (!order) {
            return res.status(404).send("Order not found");
        }

        return res.status(200).send(order)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}