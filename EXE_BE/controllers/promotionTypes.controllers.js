const PromotionType = require('../models')

const createPromotionType = async (req, res) => {
    try {
        const promotionType = await PromotionType.create(req.body)
        return res.status(201).send(promotionType)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findAllPromotionType = async (req, res) => {
    try {
        const promotionType = await PromotionType.findAll()
        return res.status(200).send(promotionType)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findPromotionTypeById = async (req, res) => {
    try {
        const { id } = req.params
        const promotionType = await PromotionType.findOne({
            where: {
                id
            }
        })

        if (!promotionType) {
            return res.status(404).send("Promotion Type not found");
        }

        res.status(200).send(promotionType)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const updatePromotionType = async (req, res) => {
    try {
        const { id } = req.params
        const promotionType = await PromotionType.findOne({
            where: {
                id
            }
        })

        if (!promotionType) {
            return res.status(404).send("Promotion Type not found");
        }

        promotionType.save(req.body)

        return res.status(200).send(promotionType)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const deletePromotionType = async (req, res) => {
    try {
        const { id } = req.params
        const promotionType = await PromotionType.destroy({
            where: {
                id
            }
        })
        if (!promotionType) {
            return res.status(404).send("Promotion Type not found");
        }

        return res.status(200).send(promotionType)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}