'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lesson extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Training, Document, UserLesson }) {
      // define association here
      this.belongsTo(Training, { foreignKey: "training" })
      this.hasMany(Document, { foreignKey: 'lesson' })
      this.hasMany(UserLesson, { foreignKey: "lesson" })
    }
  }
  Lesson.init({
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    description: DataTypes.STRING,
    point: DataTypes.INTEGER,
    refLink: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Lesson',
  });
  return Lesson;
};