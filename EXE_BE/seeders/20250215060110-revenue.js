'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Revenues', [
      {
        branchId: 3,
        amount: 15000000,
        date: "2025-01-10",
        status: true,
        target: 13000000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        branchId: 7,
        amount: 20000000,
        date: "2025-01-15",
        status: false,
        target: 25000000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        branchId: 1,
        amount: 12000000,
        date: "2025-01-20",
        status: false,
        target: 15000000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        branchId: 5,
        amount: 23000000,
        date: "2025-01-25",
        status: true,
        target: 20000000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        branchId: 9,
        amount: 9000000,
        date: "2025-02-01",
        status: false,
        target: 15000000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        branchId: 2,
        amount: 25000000,
        date: "2025-02-05",
        status: true,
        target: 23000000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        branchId: 6,
        amount: 17000000,
        date: "2025-02-10",
        status: true,
        target: 15000000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        branchId: 4,
        amount: 14620000,
        date: "2025-02-15",
        status: false,
        target: 20000000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        branchId: 10,
        amount: 22000000,
        date: "2025-02-20",
        status: true,
        target: 20000000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        branchId: 8,
        amount: 13000000,
        date: "2025-02-25",
        status: false,
        target: 15000000,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
      , {});

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
