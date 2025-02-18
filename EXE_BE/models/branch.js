'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Branch extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Warehouse, KPI, Revenue, User, Contract }) {
      // define association here
      this.hasMany(Warehouse, { foreignKey: "branchId" })
      this.hasMany(KPI, { foreignKey: "branchId" })
      this.hasMany(Revenue, { foreignKey: "branchId" })
      this.hasMany(User, { foreignKey: "branchId" })
      this.hasMany(Contract, { foreignKey: "branchId" })
    }
  }
  Branch.init({
    name: DataTypes.STRING,
    adress: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    isParent: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Branch',
  });
  return Branch;
};