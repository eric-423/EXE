const UserLesson = require('../models')

const createUserLesson = async (req, res) => {
    try {
        const userLesson = await UserLesson.create(req.body)
        return res.status(201).send(userLesson)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findAllUserLesson = async (req, res) => {
    try {
        const userLessons = await UserLesson.findAll()
        return res.status(200).send(userLessons)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findUserLessonById = async (req, res) => {
    try {
        const { id } = req.params
        const userLesson = await UserLesson.findOne({
            where: {
                id
            }
        })

        if (!userLesson) {
            return res.status(404).send("User Lesson not found");
        }

        res.status(200).send(userLesson)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const updateUserLesson = async (req, res) => {
    try {
        const { id } = req.params
        const userLesson = await UserLesson.findOne({
            where: {
                id
            }
        })

        if (!userLesson) {
            return res.status(404).send("User Lesson not found");
        }

        userLesson.save(req.body)

        return res.status(200).send(userLesson)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const deleteUserLesson = async (req, res) => {
    try {
        const { id } = req.params
        const userLesson = await userLesson.destroy({
            where: {
                id
            }
        })
        if (!userLesson) {
            return res.status(404).send("User Lesson not found");
        }

        return res.status(200).send(userLesson)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}