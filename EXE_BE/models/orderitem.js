'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
<<<<<<<< HEAD:EXE_BE/models/cookingutensil.js
  class CookingUtensil extends Model {
========
  class OrderItem extends Model {
>>>>>>>> An:EXE_BE/models/orderitem.js
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
<<<<<<<< HEAD:EXE_BE/models/cookingutensil.js
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
========
    static associate({ Order, Product }) {
      // define association here
      this.belongsTo(Product, { foreignKey: "productId" })
      this.belongsTo(Order, { foreignKey: "orderId" })
    }
  }
  OrderItem.init({
    quantity: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    note: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'OrderItem',
  });
  return OrderItem;
>>>>>>>> An:EXE_BE/models/orderitem.js
};