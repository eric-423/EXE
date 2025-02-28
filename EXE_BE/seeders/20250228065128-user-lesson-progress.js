'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('UserLessonProgresses',
      [
        {
          lesson: 1,
          userTraining: 1,
          point: 100,
          isPassed: false,
          startAt: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          lesson: 2,
          userTraining: 2,
          point: 100,
          isPassed: false,
          startAt: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          lesson: 3,
          userTraining: 3,
          point: 100,
          isPassed: false,
          startAt: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          lesson: 4,
          userTraining: 4,
          point: 100,
          isPassed: false,
          startAt: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          lesson: 5,
          userTraining: 5,
          point: 100,
          isPassed: false,
          startAt: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          lesson: 6,
          userTraining: 6,
          point: 100,
          isPassed: false,
          startAt: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          lesson: 7,
          userTraining: 7,
          point: 100,
          isPassed: false,
          startAt: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          lesson: 8,
          userTraining: 8,
          point: 100,
          isPassed: false,
          startAt: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          lesson: 9,
          userTraining: 9,
          point: 100,
          isPassed: false,
          startAt: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          lesson: 10,
          userTraining: 1,
          point: 100,
          isPassed: false,
          startAt: new Date(),
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
