const Blog = require('../models')

const createBlog = async (req, res) => {
    try {
        const blog = await Blog.create(req.body)
        return res.status(201).send(blog)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findAllBlog = async (req, res) => {
    try {
        const blog = await Blog.findAll()
        return res.status(200).send(blog)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findBlogById = async (req, res) => {
    try {
        const { id } = req.params
        const blog = await Blog.findOne({
            where: {
                id
            }
        })

        if (!blog) {
            return res.status(404).send("Blog not found");
        }

        res.status(200).send(blog)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const updateBlog = async (req, res) => {
    try {
        const { id } = req.params
        const blog = await Blog.findOne({
            where: {
                id
            }
        })

        if (!blog) {
            return res.status(404).send("Blog not found");
        }

        blog.save(req.body)

        return res.status(200).send(blog)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params
        const blog = await Blog.destroy({
            where: {
                id
            }
        })
        if (!blog) {
            return res.status(404).send("Blog not found");
        }

        return res.status(200).send(blog)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}