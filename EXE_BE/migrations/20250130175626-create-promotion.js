'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('promotions', {
      promotion_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      promotion_type_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "promotion_types",
          key: "promotion_type_id"
        }
      },
      create_by: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "user_id"
        }
      }
      ,
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      start_date: {
        type: Sequelize.DATE
      },
      end_date: {
        type: Sequelize.DATE
      },
      discount_value: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('promotions');
  }
};