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
    static associate({ Warehouse, KPI, Revenue, User, Contract, BlackList, Order, UserRoleHistory }) {
      // define association here
      this.hasMany(Warehouse, { foreignKey: "branchId" })
      this.hasMany(KPI, { foreignKey: "branchId" })
      this.hasMany(Revenue, { foreignKey: "branchId" })
      this.hasMany(UserRoleHistory, { foreignKey: "branch" })
      this.hasMany(Contract, { foreignKey: "branchId" })
      this.hasMany(BlackList, { foreignKey: "branch" })
      this.hasMany(Order, { foreignKey: "branch" })
    }
  }
  Branch.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    isParent: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Branch',
  });
  return Branch;
};