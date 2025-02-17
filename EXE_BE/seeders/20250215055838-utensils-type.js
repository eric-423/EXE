'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('UtensilsTypes', [
      {
        name: "dụng cụ ăn uống",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "dụng cụ nấu ăn",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "dụng cụ trang trí",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]
      , {});
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
