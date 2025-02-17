'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ProductTypes', [
      {
        name: 'Món chính',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Món gọi thêm ",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Món phụ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Món tráng miệng',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Món nước',
        createdAt: new Date(),
        updatedAt: new Date()
      },

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
