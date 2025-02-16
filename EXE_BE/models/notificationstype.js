'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NotificationsType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Notification }) {
      // define association here
      this.hasMany(Notification, { foreignKey: "type" })
    }
  }
  NotificationsType.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'NotificationsType',
  });
  return NotificationsType;
};