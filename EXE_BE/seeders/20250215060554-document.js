'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Documents', [
      {
        lesson: 1,
        name: 'Document 1',
        description: 'Description 1',
        refLink: 'https://www.google.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        lesson: 2,
        name: 'Document 2',
        description: 'Description 2',
        refLink: 'https://www.google.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        lesson: 3,
        name: 'Document 3',
        description: 'Description 3',
        refLink: 'https://www.google.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        lesson: 4,
        name: 'Document 4',
        description: 'Description 4',
        refLink: 'https://www.google.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        lesson: 5,
        name: 'Document 5',
        description: 'Description 5',
        refLink: 'https://www.google.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        lesson: 6,
        name: 'Document 6',
        description: 'Description 6',
        refLink: 'https://www.google.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        lesson: 7,
        name: 'Document 7',
        description: 'Description 7',
        refLink: 'https://www.google.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        lesson: 8,
        name: 'Document 8',
        description: 'Description 8',
        refLink: 'https://www.google.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        lesson: 9,
        name: 'Document 9',
        description: 'Description 9',
        refLink: 'https://www.google.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        lesson: 10,
        name: 'Document 10',
        description: 'Description 10',
        refLink: 'https://www.google.com',
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
