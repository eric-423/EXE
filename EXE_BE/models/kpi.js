'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class KPI extends Model {
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
  KPI.init({
    amount: DataTypes.FLOAT,
    date: DataTypes.DATE,
    status: DataTypes.BOOLEAN,
    target: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'KPI',
  });
  return KPI;
};