'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Material extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ MaterialType, Warehouse }) {
      // define association here
      this.belongsTo(MaterialType, { foreignKey: "type" })
      this.belongsTo(Warehouse, { foreignKey: "warehouseId" })
    }
  }
  Material.init({
    name: DataTypes.STRING,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Material',
  });
  return Material;
};