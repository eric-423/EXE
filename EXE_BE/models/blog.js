'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Blog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ BlogType, User }) {
      // define association here
      this.belongsTo(BlogType, { foreignKey: "type" })
      this.belongsTo(User, "author")
    }
  }
  Blog.init({
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Blog',
  });
  return Blog;
};