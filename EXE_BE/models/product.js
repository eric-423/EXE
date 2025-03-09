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
    static associate({ ProductTypes, OrderItem, Recipe, Branch }) {
      // define association here
      this.belongsTo(ProductTypes, { foreignKey: "type" })
      this.belongsToMany(OrderItem, { through: 'OrderItems', foreignKey: "productId", as: 'OrderItemsForProduct' })
      this.belongsTo(Branch, { foreignKey: "branch" })
      this.hasOne(Recipe)
    }
  }
  Product.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT,
    stockQuantity: DataTypes.INTEGER,
    img: DataTypes.STRING,
    salesCount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};