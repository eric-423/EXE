'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('PromotionTypes',
      [
        {
          name: "Giảm giá theo phần trăm",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Mua 1 tặng 1",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Miễn phí vận chuyển",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Quà tặng kèm",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Khuyến mãi thành viên",
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
