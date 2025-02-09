'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Warehouse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Branch, Material }) {
      // define association here
      this.belongsTo(Branch, { foreignKey: "branchId" })
      this.hasMany(Material, { foreignKey: "warehouseId" })
    }
  }
  Warehouse.init({
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Warehouse',
  });
  return Warehouse;
};