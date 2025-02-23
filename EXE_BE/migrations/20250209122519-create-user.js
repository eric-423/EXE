'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      branchId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Branches",
          key: "id"
        }
      },
      roleId: {
        type: Sequelize.INTEGER,
        required: true,
        references: {
          model: "Roles",
          key: "id"
        }
      },
      memberRank: {
        type: Sequelize.INTEGER,
        references: {
          model: "MemberAssociations",
          key: "id"
        }
      },
      fullName: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      dateOfBirth: {
        type: Sequelize.DATE
      },
      note: {
        type: Sequelize.STRING
      },
      isBan: {
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
    await queryInterface.dropTable('Users');
  }
};