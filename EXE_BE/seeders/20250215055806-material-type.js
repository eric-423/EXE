'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('MaterialTypes', [
      {
        name: "Thịt nướng",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Sườn nướng",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Bì",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Trứng ốp la",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Đậu hũ chiên",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Nước mắm chua ngọt",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Dưa leo",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Rau sống",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Mỡ hành",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Hành phi",
        createdAt: new Date(),
        updatedAt: new Date()
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
