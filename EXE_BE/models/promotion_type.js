'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class promotion_type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ promotion }) {
      // define association here
      this.hasMany(promotion, { foreignKey: "promotion_type_id" })
    }
  }
  promotion_type.init({
    promotion_type_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'promotion_type',
  });
  return promotion_type;
};