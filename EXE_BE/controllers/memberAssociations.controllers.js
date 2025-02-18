const MemberAssociation = require('../models')

const createMemberAssociation = async (req, res) => {
    try {
        const memberAssociation = await MemberAssociation.create(req.body)
        return res.status(201).send(memberAssociation)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findAllMemberAssociation = async (req, res) => {
    try {
        const memberAssociation = await MemberAssociation.findAll()
        return res.status(200).send(memberAssociation)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findMemberAssociationById = async (req, res) => {
    try {
        const { id } = req.params
        const memberAssociation = await MemberAssociation.findOne({
            where: {
                id
            }
        })

        if (!memberAssociation) {
            return res.status(404).send("Member Association not found");
        }

        res.status(200).send(memberAssociation)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const updateMemberAssociation = async (req, res) => {
    try {
        const { id } = req.params
        const memberAssociation = await MemberAssociation.findOne({
            where: {
                id
            }
        })

        if (!memberAssociation) {
            return res.status(404).send("Blog Type not found");
        }

        memberAssociation.save(req.body)

        return res.status(200).send(memberAssociation)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const deleteMemberAssociation = async (req, res) => {
    try {
        const { id } = req.params
        const memberAssociation = await MemberAssociation.destroy({
            where: {
                id
            }
        })
        if (!memberAssociation) {
            return res.status(404).send("Member Association not found");
        }

        return res.status(200).send(memberAssociation)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}