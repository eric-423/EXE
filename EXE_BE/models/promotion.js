'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class promotion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ promotion_type, user }) {
      // define association here
      this.belongsTo(promotion_type, { foreignKey: "promotion_type_id" })
      this.belongsTo(user, { foreignKey: "create_by" })
    }
  }
  promotion.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    discount_value: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'promotion',
  });
  return promotion;
};