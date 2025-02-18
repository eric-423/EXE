const OrderStatus = require('../models')

const createOrderStatus = async (req, res) => {
    try {
        const orderStatus = await OrderStatus.create(req.body)
        return res.status(201).send(orderStatus)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findAllOrderStatus = async (req, res) => {
    try {
        const orderStatus = await OrderStatus.findAll()
        return res.status(200).send(orderStatus)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findOrderStatusById = async (req, res) => {
    try {
        const { id } = req.params
        const orderStatus = await OrderStatus.findOne({
            where: {
                id
            }
        })

        if (!orderStatus) {
            return res.status(404).send("Order Status not found");
        }

        res.status(200).send(orderStatus)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const updateOrderStatus = async (req, res) => {
    try {
        const { id } = req.params
        const orderStatus = await OrderStatus.findOne({
            where: {
                id
            }
        })

        if (!orderStatus) {
            return res.status(404).send("Order Status not found");
        }

        OrderStatus.save(req.body)

        return res.status(200).send(orderStatus)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const deleteOrderStatus = async (req, res) => {
    try {
        const { id } = req.params
        const orderStatus = await OrderStatus.destroy({
            where: {
                id
            }
        })
        if (!orderStatus) {
            return res.status(404).send("Order Status not found");
        }

        return res.status(200).send(orderStatus)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}