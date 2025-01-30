'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('training_details', {
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "user_id"
        },
        primaryKey: true
      },
      training_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "trainings",
          key: "training_id"
        },
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      comment: {
        type: Sequelize.STRING
      },
      completion_date: {
        type: Sequelize.DATE
      },
      result: {
        type: Sequelize.INTEGER
      },
      attempt_time: {
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
    await queryInterface.dropTable('training_details');
  }
};