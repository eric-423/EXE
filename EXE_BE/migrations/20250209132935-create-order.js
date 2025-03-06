'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      customer: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id"
        }
      },
      worker: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id"
        }
      },
      branch: {
        type: Sequelize.INTEGER,
        references: {
          model: "Branches",
          key: "id"
        }
      },
      status: {
        type: Sequelize.INTEGER,
        references: {
          model: "OrderStatuses",
          key: "id"
        }
      },
      paymentMethod: {
        type: Sequelize.INTEGER,
        references: {
          model: "PaymentMethods",
          key: "id"
        }
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      subtotal: {
        type: Sequelize.FLOAT
      },
      promotionCode: {
        type: Sequelize.STRING
      },
      discountValue: {
        type: Sequelize.INTEGER
      },
      amount: {
        type: Sequelize.FLOAT
      },
      deliveryAt: {
        type: Sequelize.DATE
      },
      shippingFee: {
        type: Sequelize.FLOAT
      },
      note: {
        type: Sequelize.STRING
      },
      paymentCode: {
        type: Sequelize.STRING
      },
      shippingAddress: {
        type: Sequelize.STRING
      },
      shippingPhoneNumber: {
        type: Sequelize.STRING
      },
      pointUsed: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};