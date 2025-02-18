'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BlogType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Blog }) {
      // define association here
      this.hasMany(Blog, { foreignKey: "type" })
    }
  }
  BlogType.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BlogType',
  });
  return BlogType;
};