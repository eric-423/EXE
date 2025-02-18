const PaymentMethod = require('../models')

const createPaymentMethod = async (req, res) => {
    try {
        const paymentMethod = await PaymentMethod.create(req.body)
        return res.status(201).send(paymentMethod)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findAllPaymentMethod = async (req, res) => {
    try {
        const paymentMethods = await PaymentMethod.findAll()
        return res.status(200).send(paymentMethods)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findPaymentMethodById = async (req, res) => {
    try {
        const { id } = req.params
        const paymentMethod = await PaymentMethod.findOne({
            where: {
                id
            }
        })

        if (!paymentMethod) {
            return res.status(404).send("Payment Method not found");
        }

        res.status(200).send(paymentMethod)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const updatePaymentMethod = async (req, res) => {
    try {
        const { id } = req.params
        const paymentMethod = await PaymentMethod.findOne({
            where: {
                id
            }
        })

        if (!paymentMethod) {
            return res.status(404).send("Payment Method not found");
        }

        PaymentMethod.save(req.body)

        return res.status(200).send(paymentMethod)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const deletePaymentMethod = async (req, res) => {
    try {
        const { id } = req.params
        const paymentMethod = await PaymentMethod.destroy({
            where: {
                id
            }
        })
        if (!order) {
            return res.status(404).send("Payment Method not found");
        }

        return res.status(200).send(paymentMethod)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}