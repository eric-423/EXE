'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('UserLessons',
      [
        {
          mentor: 4,
          learner: 7,
          lesson: 1,
          point: 100,
          startDate: new Date(),
          endDate: new Date(),
          isPassed: false,
          comment: "none",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          mentor: 13,
          learner: 16,
          lesson: 2,
          point: 100,
          startDate: new Date(),
          endDate: new Date(),
          isPassed: false,
          comment: "none",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          mentor: 20,
          learner: 23,
          lesson: 3,
          point: 100,
          startDate: new Date(),
          endDate: new Date(),
          isPassed: false,
          comment: "none",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          mentor: 13,
          learner: 7,
          lesson: 4,
          point: 100,
          startDate: new Date(),
          endDate: new Date(),
          isPassed: false,
          comment: "none",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          mentor: 4,
          learner: 16,
          lesson: 5,
          point: 100,
          startDate: new Date(),
          endDate: new Date(),
          isPassed: false,
          comment: "none",
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
