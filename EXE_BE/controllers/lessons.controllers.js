const Lesson = require('../models')

const createLesson = async (req, res) => {
    try {
        const lesson = await Lesson.create(req.body)
        return res.status(201).send(lesson)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findAllLesson = async (req, res) => {
    try {
        const lesson = await Lesson.findAll()
        return res.status(200).send(lesson)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findLessonById = async (req, res) => {
    try {
        const { id } = req.params
        const lesson = await Lesson.findOne({
            where: {
                id
            }
        })

        if (!lesson) {
            return res.status(404).send("Lesson not found");
        }

        res.status(200).send(lesson)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const updateLesson = async (req, res) => {
    try {
        const { id } = req.params
        const lesson = await Lesson.findOne({
            where: {
                id
            }
        })

        if (!lesson) {
            return res.status(404).send("Lesson not found");
        }

        lesson.save(req.body)

        return res.status(200).send(lesson)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const deleteLesson = async (req, res) => {
    try {
        const { id } = req.params
        const lesson = await Lesson.destroy({
            where: {
                id
            }
        })
        if (!lesson) {
            return res.status(404).send("Lesson not found");
        }

        return res.status(200).send(lesson)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}