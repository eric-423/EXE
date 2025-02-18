const Document = require('../models')

const createDocument = async (req, res) => {
    try {
        const document = await Document.create(req.body)
        return res.status(201).send(document)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findAllDocument = async (req, res) => {
    try {
        const documents = await Document.findAll()
        return res.status(200).send(documents)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findDocumentById = async (req, res) => {
    try {
        const { id } = req.params
        const document = await Document.findOne({
            where: {
                id
            }
        })

        if (!document) {
            return res.status(404).send("Document not found");
        }

        res.status(200).send(document)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const updateDocument = async (req, res) => {
    try {
        const { id } = req.params
        const document = await Document.findOne({
            where: {
                id
            }
        })

        if (!document) {
            return res.status(404).send("Document not found");
        }

        document.save(req.body)

        return res.status(200).send(document)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const deleteDocument = async (req, res) => {
    try {
        const { id } = req.params
        const document = await Document.destroy({
            where: {
                id
            }
        })
        if (!document) {
            return res.status(404).send("Document not found");
        }

        return res.status(200).send(document)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}