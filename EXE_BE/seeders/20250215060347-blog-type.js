'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('BlogTypes', [
      {
        name: "Blog Truyền thông",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Blog Marketing",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Blog Gia đình",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Blog Nuôi dạy con",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Blog Sức khỏe",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Blog Du lịch",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Blog Ẩm thực",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Blog Công nghệ",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Blog Tài chính",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Blog Thời trang",
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
