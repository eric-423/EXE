'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Contracts', [
      {
        userId: 5,
        branchId: 5,
        startDate: new Date("2023-01-01"),
        endDate: new Date("2023-12-31"),
        status: true,
        reflink: "",
        term: "",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 9,
        branchId: 1,
        startDate: new Date("2023-02-01"),
        endDate: new Date("2023-11-30"),
        status: true,
        reflink: "",
        term: "",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 10,
        branchId: 3,
        startDate: new Date("2023-03-01"),
        endDate: new Date("2023-10-31"),
        status: true,
        reflink: "",
        term: "",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 14,
        branchId: 2,
        startDate: new Date("2023-04-01"),
        endDate: new Date("2023-09-30"),
        status: true,
        reflink: "",
        term: "",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        branchId: 9,
        startDate: new Date("2023-05-01"),
        endDate: new Date("2023-08-31"),
        status: true,
        reflink: "",
        term: "",
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

