const Promotion = require('../models')

const createPromotion = async (req, res) => {
    try {
        const promotion = await Promotion.create(req.body)
        return res.status(201).send(promotion)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findAllPromotion = async (req, res) => {
    try {
        const promotion = await Promotion.findAll()
        return res.status(200).send(promotion)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findPromotionById = async (req, res) => {
    try {
        const { id } = req.params
        const promotion = await Promotion.findOne({
            where: {
                id
            }
        })

        if (!lesson) {
            return res.status(404).send("Promotion not found");
        }

        res.status(200).send(lesson)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const updatePromotion = async (req, res) => {
    try {
        const { id } = req.params
        const promotion = await Promotion.findOne({
            where: {
                id
            }
        })

        if (!promotion) {
            return res.status(404).send("Promotion not found");
        }

        promotion.save(req.body)

        return res.status(200).send(promotion)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const deletePromotion = async (req, res) => {
    try {
        const { id } = req.params
        const promotion = await Promotion.destroy({
            where: {
                id
            }
        })
        if (!promotion) {
            return res.status(404).send("Promotion not found");
        }

        return res.status(200).send(promotion)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}