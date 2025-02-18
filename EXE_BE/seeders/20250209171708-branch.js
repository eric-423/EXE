'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Branches', [
      {
        name: 'Headquarters',
        adress: '123 Main St, New York, NY',
        phoneNumber: '123-456-7890',
        isParent: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'West Coast Branch',
        adress: '456 Sunset Blvd, Los Angeles, CA',
        phoneNumber: '987-654-3210',
        isParent: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Midwest Branch',
        adress: '789 Lakeshore Dr, Chicago, IL',
        phoneNumber: '555-123-4567',
        isParent: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
