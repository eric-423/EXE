const KPI = require('../models')

const createKPI = async (req, res) => {
    try {
        const kpi = await KPI.create(req.body)
        return res.status(201).send(kpi)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findAllKPI = async (req, res) => {
    try {
        const kpis = await KPI.findAll()
        return res.status(200).send(kpis)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findOrderStatusById = async (req, res) => {
    try {
        const { id } = req.params
        const kpi = await KPI.findOne({
            where: {
                id
            }
        })

        if (!kpi) {
            return res.status(404).send("KPI not found");
        }

        res.status(200).send(kpi)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const updateKPI = async (req, res) => {
    try {
        const { id } = req.params
        const kpi = await KPI.findOne({
            where: {
                id
            }
        })

        if (!kpi) {
            return res.status(404).send("KPI not found");
        }

        KPI.save(req.body)

        return res.status(200).send(kpi)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const deleteKPI = async (req, res) => {
    try {
        const { id } = req.params
        const kpi = await KPI.destroy({
            where: {
                id
            }
        })
        if (!kpi) {
            return res.status(404).send("KPI not found");
        }

        return res.status(200).send(kpi)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}