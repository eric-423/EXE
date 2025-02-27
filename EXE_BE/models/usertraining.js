'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserTraining extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Training, User, UserLessonProgress }) {
      // define association here
      this.belongsTo(User, { foreignKey: "user" })
      this.belongsTo(Training, { foreignKey: "training" })
      this.hasMany(UserLessonProgress, { foreignKey: "userTraining" })
    }
  }
  UserTraining.init({
    enrollDate: DataTypes.DATE,
    point: DataTypes.INTEGER,
    isPassed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'UserTraining',
  });
  return UserTraining;
};