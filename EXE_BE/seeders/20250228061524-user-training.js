'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('UserTrainings', [
      {
        user: 2,
        training: 1,
        enrollDate: new Date(),
        point: 100,
        isPassed: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user: 12,
        training: 2,
        enrollDate: new Date(),
        point: 100,
        isPassed: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        user: 19,
        training: 3,
        enrollDate: new Date(),
        point: 100,
        isPassed: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user: 19,
        training: 4,
        enrollDate: new Date(),
        point: 100,
        isPassed: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user: 12,
        training: 5,
        enrollDate: new Date(),
        point: 100,
        isPassed: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user: 2,
        training: 6,
        enrollDate: new Date(),
        point: 100,
        isPassed: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user: 12,
        training: 7,
        enrollDate: new Date(),
        point: 100,
        isPassed: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user: 19,
        training: 8,
        enrollDate: new Date(),
        point: 100,
        isPassed: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user: 2,
        training: 9,
        enrollDate: new Date(),
        point: 100,
        isPassed: false,
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
