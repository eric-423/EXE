'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PromotionType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Promotion }) {
      // define association here
      this.hasMany(Promotion, { foreignKey: "type" })
    }
  }
  PromotionType.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PromotionType',
  });
  return PromotionType;
};