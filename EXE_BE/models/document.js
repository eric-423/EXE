'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Document extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Lesson }) {
      // define association here
      this.belongsTo(Lesson, { foreignKey: "lesson" })
    }
  }
  Document.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    refLink: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Document',
  });
  return Document;
};