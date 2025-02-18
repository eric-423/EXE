const TaskStatus = require('../models')

const createTaskStatus = async (req, res) => {
    try {
        const taskStatus = await TaskStatus.create(req.body)
        return res.status(201).send(taskStatus)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findAllTaskStatus = async (req, res) => {
    try {
        const taskStatus = await TaskStatus.findAll()
        return res.status(200).send(taskStatus)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findTaskStatusById = async (req, res) => {
    try {
        const { id } = req.params
        const taskStatus = await TaskStatus.findOne({
            where: {
                id
            }
        })

        if (!taskStatus) {
            return res.status(404).send("Task Status not found");
        }

        res.status(200).send(taskStatus)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const updateTaskStatus = async (req, res) => {
    try {
        const { id } = req.params
        const taskStatus = await TaskStatus.findOne({
            where: {
                id
            }
        })

        if (!taskStatus) {
            return res.status(404).send("Task Status not found");
        }

        TaskStatus.save(req.body)

        return res.status(200).send(taskStatus)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const deleteTask = async (req, res) => {
    try {
        const { id } = req.params
        const taskStatus = await TaskStatus.destroy({
            where: {
                id
            }
        })
        if (!taskStatus) {
            return res.status(404).send("Task Status not found");
        }

        return res.status(200).send(taskStatus)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}