'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Revenue extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Branch }) {
      // define association here
      this.belongsTo(Branch, { foreignKey: "branchId" })
    }
  }
  Revenue.init({
    amount: DataTypes.FLOAT,
    date: DataTypes.DATE,
    status: DataTypes.BOOLEAN,
    target: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Revenue',
  });
  return Revenue;
};