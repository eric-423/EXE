'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ MemberAssociation, Role, Branch, Contract, Information, Order, MarketingCampaign, Schedule, Blog, Recipe, Notification, UserLesson }) {
      // define association here
      this.belongsTo(MemberAssociation, { foreignKey: "memberRank" })
      this.belongsTo(Role, { foreignKey: "roleId", as: "role" })
      this.belongsTo(Branch, { foreignKey: "branchId" })
      this.hasMany(Contract, { foreignKey: "userId" })
      this.hasMany(Information, { foreignKey: "userId" })
      this.hasMany(Order, { foreignKey: "userId" })
      this.hasMany(MarketingCampaign, { foreignKey: "createdBy" })
      this.hasMany(Schedule, { foreignKey: "userId" })
      this.hasMany(Blog, { foreignKey: "author" })
      this.hasMany(Recipe, { foreignKey: "createdBy" })
      this.hasMany(Notification, { foreignKey: "receiver" })
      this.hasMany(UserLesson, { foreignKey: "mentor" })
      this.hasMany(UserLesson, { foreignKey: "learner" })
    }
  }
  User.init({
    fullName: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    dateOfBirth: DataTypes.DATE,
    note: DataTypes.STRING,
    isBan: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};