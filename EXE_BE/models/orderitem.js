'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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
};