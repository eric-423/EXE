'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('BlackLists', [
      {
        branch: 1,
        address: '123 Main St, New York, NY',
        phoneNumber: '123-456-7890',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        branch: 3,
        address: '234 Main St, New York, NY',
        phoneNumber: '123-456-7890',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        branch: 5,
        address: '345 Main St, New York, NY',
        phoneNumber: '123-456-7890',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        branch: 7,
        address: '456 Main St, New York, NY',
        phoneNumber: '123-456-7890',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        branch: 2,
        address: '57 Main St, New York, NY',
        phoneNumber: '123-456-7890',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        branch: 4,
        address: '788 Main St, New York, NY',
        phoneNumber: '123-456-7890',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        branch: 6,
        address: '876 Main St, New York, NY',
        phoneNumber: '123-456-7890',
        createdAt: new Date(),
        updatedAt: new Date()
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
