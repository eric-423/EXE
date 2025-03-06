'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MarketingCampaign extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      // define association here
      this.belongsTo(User, { foreignKey: "createdBy" })
    }
  }
  MarketingCampaign.init({
    name: DataTypes.STRING,
    content: DataTypes.STRING,
    img: DataTypes.STRING,
    scheduledAt: DataTypes.DATE,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'MarketingCampaign',
  });
  return MarketingCampaign;
};