'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ NotificationsType, User }) {
      // define association here
      this.belongsTo(NotificationsType, { foreignKey: "type" })
      this.belongsTo(User, { foreignKey: "receiver" })
    }
  }
  Notification.init({
    name: DataTypes.STRING,
    content: DataTypes.STRING,
    refLink: DataTypes.STRING,
    isSeen: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Notification',
  });
  return Notification;
};