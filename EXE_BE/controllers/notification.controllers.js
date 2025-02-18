const Notification = require('../models')

const createNotification = async (req, res) => {
    try {
        const notification = await Notification.create(req.body)
        return res.status(201).send(notification)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findAllNotification = async (req, res) => {
    try {
        const notifications = await Notification.findAll()
        return res.status(200).send(notifications)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findNotificationById = async (req, res) => {
    try {
        const { id } = req.params
        const notification = await Notification.findOne({
            where: {
                id
            }
        })

        if (!notification) {
            return res.status(404).send("Notification not found");
        }

        res.status(200).send(notification)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const updateNotification = async (req, res) => {
    try {
        const { id } = req.params
        const notification = await Notification.findOne({
            where: {
                id
            }
        })

        if (!notification) {
            return res.status(404).send("Notification not found");
        }

        notification.save(req.body)

        return res.status(200).send(notification)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const deleteNotification = async (req, res) => {
    try {
        const { id } = req.params
        const notification = await Notification.destroy({
            where: {
                id
            }
        })
        if (!notification) {
            return res.status(404).send("Notification not found");
        }

        return res.status(200).send(notification)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}