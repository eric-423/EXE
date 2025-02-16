'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UtensilsType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ CookingUtensil }) {
      this.hasMany(CookingUtensil, { foreignKey: "type" })
      // define association here
    }
  }
  UtensilsType.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UtensilsType',
  });
  return UtensilsType;
};