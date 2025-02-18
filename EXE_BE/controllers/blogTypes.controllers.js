const BlogType = require('../models')

const createBlogType = async (req, res) => {
    try {
        const blogType = await BlogType.create(req.body)
        return res.status(201).send(blogType)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findAllBlogType = async (req, res) => {
    try {
        const blogType = await BlogType.findAll()
        return res.status(200).send(blogType)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findBlogTypeById = async (req, res) => {
    try {
        const { id } = req.params
        const blogType = await BlogType.findOne({
            where: {
                id
            }
        })

        if (!blogType) {
            return res.status(404).send("Blog Type not found");
        }

        res.status(200).send(blogType)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const updateBlogType = async (req, res) => {
    try {
        const { id } = req.params
        const blogType = await BlogType.findOne({
            where: {
                id
            }
        })

        if (!blogType) {
            return res.status(404).send("Blog Type not found");
        }

        blogType.save(req.body)

        return res.status(200).send(blogType)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const deleteBlogType = async (req, res) => {
    try {
        const { id } = req.params
        const blogType = await BlogType.destroy({
            where: {
                id
            }
        })
        if (!blogType) {
            return res.status(404).send("Blog Type not found");
        }

        return res.status(200).send(blogType)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}