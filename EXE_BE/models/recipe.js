'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Product }) {
      this.belongsTo(Product, { foreignKey: "product" })
      // define association here
    }
  }
  Recipe.init({
    name: DataTypes.STRING,
    ingredients: DataTypes.STRING,
    instructions: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Recipe',
  });
  return Recipe;
};