const Task = require('../models')

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        return res.status(201).send(task)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findAllTask = async (req, res) => {
    try {
        const task = await Task.findAll()
        return res.status(200).send(task)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findTaskById = async (req, res) => {
    try {
        const { id } = req.params
        const task = await Task.findOne({
            where: {
                id
            }
        })

        if (!task) {
            return res.status(404).send("Task not found");
        }

        res.status(200).send(task)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const updateTask = async (req, res) => {
    try {
        const { id } = req.params
        const task = await Task.findOne({
            where: {
                id
            }
        })

        if (!task) {
            return res.status(404).send("Task not found");
        }

        Task.save(req.body)

        return res.status(200).send(task)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const deleteTask = async (req, res) => {
    try {
        const { id } = req.params
        const task = await Task.destroy({
            where: {
                id
            }
        })
        if (!task) {
            return res.status(404).send("Task not found");
        }

        return res.status(200).send(task)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}