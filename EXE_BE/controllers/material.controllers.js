const Material = require('../models')

const createMaterial = async (req, res) => {
    try {
        const material = await Material.create(req.body)
        return res.status(201).send(material)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findAllMaterial = async (req, res) => {
    try {
        const materials = await Material.findAll()
        return res.status(200).send(materials)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findMaterialById = async (req, res) => {
    try {
        const { id } = req.params
        const material = await Material.findOne({
            where: {
                id
            }
        })

        if (!material) {
            return res.status(404).send("Material not found");
        }

        res.status(200).send(material)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const updateMaterial = async (req, res) => {
    try {
        const { id } = req.params
        const material = await Material.findOne({
            where: {
                id
            }
        })

        if (!material) {
            return res.status(404).send("Material not found");
        }

        cookingUtensils.save(req.body)

        return res.status(200).send(cookingUtensils)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const deleteMaterial = async (req, res) => {
    try {
        const { id } = req.params
        const material = await Material.destroy({
            where: {
                id
            }
        })
        if (!material) {
            return res.status(404).send("Material not found");
        }

        return res.status(200).send(cookingUtensil)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}