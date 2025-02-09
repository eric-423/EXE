'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CookingUtensil extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ UtensilsType }) {
      // define association here
      this.belongsTo(UtensilsType, { foreignKey: "type" })
    }
  }
  CookingUtensil.init({
    name: DataTypes.STRING,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CookingUtensil',
  });
  return CookingUtensil;
};