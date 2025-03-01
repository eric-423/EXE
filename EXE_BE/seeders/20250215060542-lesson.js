'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Lessons', [
      {
        training: 1,
        title: "Lesson 1",
        content: "Content 1",
        description: "Description 1",
        point: 100,
        refLink: "https://www.google.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        training: 2,
        title: "Lesson 2",
        content: "Content 2",
        description: "Description 2",
        point: 200,
        refLink: "https://www.google.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        training: 3,
        title: "Lesson 3",
        content: "Content 3",
        description: "Description 3",
        point: 300,
        refLink: "https://www.google.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        training: 4,
        title: "Lesson 4",
        content: "Content 4",
        description: "Description 4",
        point: 400,
        refLink: "https://www.google.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        training: 5,
        title: "Lesson 5",
        content: "Content 5",
        description: "Description 5",
        point: 500,
        refLink: "https://www.google.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        training: 6,
        title: "Lesson 6",
        content: "Content 6",
        description: "Description 6",
        point: 600,
        refLink: "https://www.google.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        training: 7,
        title: "Lesson 7",
        content: "Content 7",
        description: "Description 7",
        point: 700,
        refLink: "https://www.google.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        training: 8,
        title: "Lesson 8",
        content: "Content 8",
        description: "Description 8",
        point: 800,
        refLink: "https://www.google.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        training: 9,
        title: "Lesson 9",
        content: "Content 9",
        description: "Description 9",
        point: 800,
        refLink: "https://www.google.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        training: 10,
        title: "Lesson 10",
        content: "Content 10",
        description: "Description 10",
        point: 800,
        refLink: "https://www.google.com",
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
