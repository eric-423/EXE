const { where } = require('sequelize')
const { Branch } = require('../models')


const createBranch = async (req, res) => {

    const { name, address, phoneNumber, isParent } = req.body
    try {
        const newBranch = await Branch.create({ name, address, phoneNumber, isParent })
        res.status(201).send(newBranch)
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const readAllBranch = async (req, res) => {
    try {
        const branches = await Branch.findAll();
        res.status(200).send(branches)
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const readById = async (req, res) => {
    const { id } = req.params
    try {
        const branch = await Branch.findOne({
            where: {
                id
            }
        });
        if (!branch) {
            res.status(404).send({ message: "Branch Not Found" });
        }
        res.status(200).send(branch);

    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const deleteBranch = async (req, res) => {
    const { id } = req.params
    try {
        const deletedBranch = await Branch.destroy({
            where: {
                id
            }
        })
        if (!deletedBranch) {
            return res.status(404).send({ message: "Branch not found" });
        }
        res.status(200).send({ message: "Branch deleted successfully", deletedBranch });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const updateBranch = async (req, res) => {
    const id = req.params
    const { name, address, phoneNumber, isParent } = req.body
    try {
        const updatedBranch = await Branch.findOne({
            where: {
                id
            }
        })
        if (!updatedBranch) {
            res.status(404).send({ message: "Branch Not Found" });
        }
        updatedBranch.name = name
        updatedBranch.address = address
        updatedBranch.phoneNumber = phoneNumber
        updatedBranch.isParent = isParent
        updatedBranch.save()

        res.status(200).send(updateBranch);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

module.exports = {
    createBranch,
    readAllBranch,
    readById,
    deleteBranch,
    updateBranch
}