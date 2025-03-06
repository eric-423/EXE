'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('OrderStatuses', [
      {
        name: "Pending",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Processing",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Shipped",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Delivered",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Cancelled",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Returned",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Refunded",
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
