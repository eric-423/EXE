'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('TaskStatuses', [
      {
        name: 'In Progress',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pending Approval',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Completed',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cancelled',
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
