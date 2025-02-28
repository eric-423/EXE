'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Roles', [
      {
        name: 'ADMIN',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'MANAGER',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'MEMBER',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'HIGHLY_STAFF',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'FRANCHISEE_OWNER',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'CUSTOMER',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'SHIPPER',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'WORKER',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});
  },

  async down(queryInterface, Sequelize) {
  }
};
