'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserLessonProgresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      lesson: {
        type: Sequelize.INTEGER,
        references: {
          model: "Lessons",
          key: "id"
        }
      },
      userTraining: {
        type: Sequelize.INTEGER,
        references: {
          model: "UserTrainings",
          key: "id"
        }
      },
      point: {
        type: Sequelize.INTEGER
      },
      isPassed: {
        type: Sequelize.BOOLEAN
      },
      startAt: {
        allowNull: false,
        type: Sequelize.DATE
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
    await queryInterface.dropTable('UserLessonProgresses');
  }
};