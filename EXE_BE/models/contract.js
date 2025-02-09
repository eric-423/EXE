'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contract extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Branch, User }) {
      this.belongsTo(Branch, { foreignKey: "branchId" })
      this.belongsTo(User, { foreignKey: "userId" })
    }
  }
  Contract.init({
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    status: DataTypes.BOOLEAN,
    reflink: DataTypes.STRING,
    term: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Contract',
  });
  return Contract;
};