'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ OrderStatus, PaymentMethod, User, OrderItem }) {
      // define association here
      this.belongsTo(OrderStatus, { foreignKey: "status" })
      this.belongsTo(PaymentMethod, { foreignKey: "paymentMethod" })
      this.belongsTo(User, { foreignKey: "userId" })
      this.belongsToMany(OrderItem, { through: 'OrderItems', foreignKey: "orderId", as: 'OrderItemsForOrder' })
    }
  }
  Order.init({
    quantity: DataTypes.INTEGER,
    subtotal: DataTypes.FLOAT,
    promotionCode: DataTypes.STRING,
    discountValue: DataTypes.INTEGER,
    amount: DataTypes.FLOAT,
    deliveryAt: DataTypes.DATE,
    shippingFee: DataTypes.FLOAT,
    note: DataTypes.STRING,
    paymentCode: DataTypes.STRING,
    shippingAddress: DataTypes.STRING,
    shippingPhoneNumber: DataTypes.STRING,
    pointUsed: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};