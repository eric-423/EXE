'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ ProductTypes, OrderItem }) {
      // define association here
      this.belongsTo(ProductTypes, { foreignKey: "type" })
      this.belongsToMany(OrderItem, { through: 'OrderItems', foreignKey: "productId", as: 'OrderItemsForProduct' })
    }
  }
  Product.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT,
    stockQuantity: DataTypes.INTEGER,
    img: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};