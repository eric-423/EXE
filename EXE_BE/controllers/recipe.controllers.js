const Recipe = require('../models')

const createRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.create(req.body)
        return res.status(201).send(recipe)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findAllRecipe = async (req, res) => {
    try {
        const recipes = await Recipe.findAll()
        return res.status(200).send(recipes)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findRecipeById = async (req, res) => {
    try {
        const { id } = req.params
        const recipe = await Recipe.findOne({
            where: {
                id
            }
        })

        if (!recipe) {
            return res.status(404).send("Recipe not found");
        }

        res.status(200).send(recipe)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const updateRecipe = async (req, res) => {
    try {
        const { id } = req.params
        const recipe = await Recipe.findOne({
            where: {
                id
            }
        })

        if (!recipe) {
            return res.status(404).send("Recipe not found");
        }

        recipe.save(req.body)

        return res.status(200).send(recipe)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const deleteRecipe = async (req, res) => {
    try {
        const { id } = req.params
        const recipe = await Recipe.destroy({
            where: {
                id
            }
        })
        if (!recipe) {
            return res.status(404).send("Recipe not found");
        }

        return res.status(200).send(recipe)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}