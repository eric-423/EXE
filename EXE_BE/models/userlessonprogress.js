'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserLessonProgress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ UserTraining, Lesson }) {
      // define association here
      this.belongsTo(UserTraining, { foreignKey: "userTraining" })
      this.belongsTo(Lesson, { foreignKey: "lesson" })
    }
  }
  UserLessonProgress.init({
    point: DataTypes.INTEGER,
    isPassed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'UserLessonProgress',
  });
  return UserLessonProgress;
};