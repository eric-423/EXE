const NotificationsType = require('../models')

const createNotificationsType = async (req, res) => {
    try {
        const notificationsType = await NotificationsType.create(req.body)
        return res.status(201).send(notificationsType)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findAllnotificationsType = async (req, res) => {
    try {
        const notificationsTypes = await NotificationsType.findAll()
        return res.status(200).send(notificationsTypes)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findnotificationsTypeById = async (req, res) => {
    try {
        const { id } = req.params
        const notificationsType = await NotificationsType.findOne({
            where: {
                id
            }
        })

        if (!notificationsType) {
            return res.status(404).send("Notifications Type not found");
        }

        res.status(200).send(notificationsType)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const updateNotificationsType = async (req, res) => {
    try {
        const { id } = req.params
        const notificationsType = await NotificationsType.findOne({
            where: {
                id
            }
        })

        if (!notificationsType) {
            return res.status(404).send("Notifications Type not found");
        }

        notificationsType.save(req.body)

        return res.status(200).send(notificationsType)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const deleteNotificationsType = async (req, res) => {
    try {
        const { id } = req.params
        const notificationsType = await NotificationsType.destroy({
            where: {
                id
            }
        })
        if (!notificationsType) {
            return res.status(404).send("Notifications Type not found");
        }

        return res.status(200).send(notificationsType)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}