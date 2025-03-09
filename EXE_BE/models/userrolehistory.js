'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserRoleHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Role, User, Branch }) {
      this.belongsTo(Role, { foreignKey: "role" })
      this.belongsTo(User, { foreignKey: "user" })
      this.belongsTo(Branch, { foreignKey: "branch" })
      // define association here
    }
  }
  UserRoleHistory.init({
    endDate: DataTypes.DATE,
    isActive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'UserRoleHistory',
  });
  return UserRoleHistory;
};