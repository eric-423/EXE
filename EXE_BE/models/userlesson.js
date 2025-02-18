'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserLesson extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Lesson, User }) {
      // define association here
      this.belongsTo(Lesson, { foreignKey: "lesson" })
      this.belongsTo(User, { foreignKey: "learner" })
      this.belongsTo(User, { foreignKey: "mentor" })
    }
  }
  UserLesson.init({
    point: DataTypes.INTEGER,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    isPassed: DataTypes.BOOLEAN,
    comment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserLesson',
  });
  return UserLesson;
};