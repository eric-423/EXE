'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('PaymentMethods', [
      {
        name: "Credit Card",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Debit Card",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "PayPal",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Bank Transfer",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Cash on Delivery",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Mobile Payment",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Cryptocurrency",
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
