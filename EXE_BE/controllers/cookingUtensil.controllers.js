const CookingUtensil = require('../models')

const createCookingUtensil = async (req, res) => {
    try {
        const cookingUtensil = await CookingUtensil.create(req.body)
        return res.status(201).send(cookingUtensil)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findAllCookingUtensil = async (req, res) => {
    try {
        const cookingUtensils = await CookingUtensil.findAll()
        return res.status(200).send(cookingUtensils)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findCookingUtensilById = async (req, res) => {
    try {
        const { id } = req.params
        const cookingUtensils = await CookingUtensil.findOne({
            where: {
                id
            }
        })

        if (!cookingUtensils) {
            return res.status(404).send("Cooking Utensil not found");
        }

        res.status(200).send(cookingUtensils)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const updateCookingUtensil = async (req, res) => {
    try {
        const { id } = req.params
        const cookingUtensils = await CookingUtensil.findOne({
            where: {
                id
            }
        })

        if (!cookingUtensils) {
            return res.status(404).send("Cooking Utensil not found");
        }

        cookingUtensils.save(req.body)

        return res.status(200).send(cookingUtensils)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const deleteCookingUtensil = async (req, res) => {
    try {
        const { id } = req.params
        const cookingUtensil = await CookingUtensil.destroy({
            where: {
                id
            }
        })
        if (!cookingUtensil) {
            return res.status(404).send("Cooking Utensil not found");
        }

        return res.status(200).send(cookingUtensil)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}