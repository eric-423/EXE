'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('UserRoleHistories', [
      {
        role: 1,
        user: 1,
        branch: 1,
        endDate: new Date(),
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        role: 2,
        user: 3,
        branch: 2,
        endDate: new Date(),
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        role: 7,
        user: 5,
        branch: 3,
        endDate: new Date(),
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        role: 8,
        user: 6,
        branch: 4,
        endDate: new Date(),
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        role: 8,
        user: 2,
        branch: 5,
        endDate: new Date(),
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        role: 7,
        user: 4,
        branch: 6,
        endDate: new Date(),
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        role: 1,
        user: 6,
        branch: 7,
        endDate: new Date(),
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        role: 2,
        user: 8,
        branch: 8,
        endDate: new Date(),
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        role: 2,
        user: 12,
        branch: 9,
        endDate: new Date(),
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        role: 1,
        user: 10,
        branch: 1,
        endDate: new Date(),
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        role: 7,
        user: 3,
        branch: 3,
        endDate: new Date(),
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },


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
