'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('NotificationsTypes', [
      {
        name: "New Follower",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: "New Like",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: "New Comment",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: "New Reply",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: "New Mention",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "New member",
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
