const MarketingCampaign = require('../models')

const createMarketingCampaign = async (req, res) => {
    try {
        const marketingCampaign = await MarketingCampaign.create(req.body)
        return res.status(201).send(marketingCampaign)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findAllMarketingCampaign = async (req, res) => {
    try {
        const marketingCampaign = await MarketingCampaign.findAll()
        return res.status(200).send(marketingCampaign)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const findMarketingCampaignById = async (req, res) => {
    try {
        const { id } = req.params
        const marketingCampaign = await MarketingCampaign.findOne({
            where: {
                id
            }
        })

        if (!marketingCampaign) {
            return res.status(404).send("Marketing Campaign not found");
        }

        res.status(200).send(marketingCampaign)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const updateMarketingCampaign = async (req, res) => {
    try {
        const { id } = req.params
        const marketingCampaign = await MarketingCampaign.findOne({
            where: {
                id
            }
        })

        if (!marketingCampaign) {
            return res.status(404).send("Marketing Campaign not found");
        }

        marketingCampaign.save(req.body)

        return res.status(200).send(marketingCampaign)

    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const deleteMarketingCampaign = async (req, res) => {
    try {
        const { id } = req.params
        const marketingCampaign = await MarketingCampaign.destroy({
            where: {
                id
            }
        })
        if (!marketingCampaign) {
            return res.status(404).send("Marketing Campaign not found");
        }

        return res.status(200).send(marketingCampaign)
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
}