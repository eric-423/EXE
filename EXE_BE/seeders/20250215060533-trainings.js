'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Trainings', [
      {
        name: "Training 1",
        note: "Note 1",
        point: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Training 2",
        note: "Note 2",
        point: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Training 3",
        note: "Note 3",
        point: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Training 4",
        note: "Note 4",
        point: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Training 5",
        note: "Note 5",
        point: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Training 6",
        note: "Note 6",
        point: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Training 7",
        note: "Note 7",
        point: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Training 8",
        note: "Note 8",
        point: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Training 9",
        note: "Note 9",
        point: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Training 10",
        note: "Note 10",
        point: 10,
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
