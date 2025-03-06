const Warehouse = require('../models')

const createWarehouse = async (req, res) => {
    try {
        const warehouse = await Warehouse.create(req.body)
        return res.status(201).send(warehouse)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findAllWarehouse = async (req, res) => {
    try {
        const warehouses = await Warehouse.findAll()
        return res.status(200).send(warehouses)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findWarehouseById = async (req, res) => {
    try {
        const { id } = req.params
        const warehouse = await Warehouse.findOne({
            where: {
                id
            }
        })

        if (!warehouse) {
            return res.status(404).send("Warehouse not found");
        }

        res.status(200).send(warehouse)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const updateWarehouse = async (req, res) => {
    try {
        const { id } = req.params
        const warehouse = await Warehouse.findOne({
            where: {
                id
            }
        })

        if (!warehouse) {
            return res.status(404).send("Warehouse not found");
        }

        warehouse.save(req.body)

        return res.status(200).send(Warehouse)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const deleteWarehouse = async (req, res) => {
    try {
        const { id } = req.params
        const warehouse = await Warehouse.destroy({
            where: {
                id
            }
        })
        if (!warehouse) {
            return res.status(404).send("Warehouse not found");
        }

        return res.status(200).send(warehouse)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}