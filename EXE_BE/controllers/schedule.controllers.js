const Schedule = require('../models')

const createSchedule = async (req, res) => {
    try {
        const schedule = await Schedule.create(req.body)
        return res.status(201).send(schedule)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findAllSchedule = async (req, res) => {
    try {
        const schedule = await Schedule.findAll()
        return res.status(200).send(schedule)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findScheduleById = async (req, res) => {
    try {
        const { id } = req.params
        const schedule = await Schedule.findOne({
            where: {
                id
            }
        })

        if (!schedule) {
            return res.status(404).send("Schedule not found");
        }

        res.status(200).send(schedule)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const updateSchedule = async (req, res) => {
    try {
        const { id } = req.params
        const schedule = await Schedule.findOne({
            where: {
                id
            }
        })

        if (!schedule) {
            return res.status(404).send("Schedule not found");
        }

        schedule.save(req.body)

        return res.status(200).send(schedule)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const deleteSchedule = async (req, res) => {
    try {
        const { id } = req.params
        const schedule = await Schedule.destroy({
            where: {
                id
            }
        })
        if (!schedule) {
            return res.status(404).send("Schedule not found");
        }

        return res.status(200).send(schedule)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}