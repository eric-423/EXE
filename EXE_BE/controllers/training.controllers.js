const Training = require('../models')

const createTraining = async (req, res) => {
    try {
        const training = await Training.create(req.body)
        return res.status(201).send(training)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findAllTraining = async (req, res) => {
    try {
        const trainings = await Training.findAll()
        return res.status(200).send(trainings)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findTrainingById = async (req, res) => {
    try {
        const { id } = req.params
        const training = await Training.findOne({
            where: {
                id
            }
        })

        if (!training) {
            return res.status(404).send("Training not found");
        }

        res.status(200).send(training)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const updateTraining = async (req, res) => {
    try {
        const { id } = req.params
        const training = await Training.findOne({
            where: {
                id
            }
        })

        if (!training) {
            return res.status(404).send("Training not found");
        }

        training.save(req.body)

        return res.status(200).send(training)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const deleteTraining = async (req, res) => {
    try {
        const { id } = req.params
        const training = await Training.destroy({
            where: {
                id
            }
        })
        if (!training) {
            return res.status(404).send("Training not found");
        }

        return res.status(200).send(training)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}