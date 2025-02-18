'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('CookingUtensils',
      [
        {
          type: 1,
          name: "Chén",
          quantity: 100,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: 1,
          name: "Đũa",
          quantity: 200,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: 2,
          name: "Chảo",
          quantity: 50,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: 2,
          name: "Nồi",
          quantity: 30,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: 1,
          name: "Muỗng",
          quantity: 200,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: 1,
          name: "Dao",
          quantity: 100,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: 1,
          name: "Thìa",
          quantity: 200,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: 1,
          name: "Khay",
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: 1,
          name: "Bình nước",
          quantity: 15,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: 1,
          name: "Ly",
          quantity: 50,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: 1,
          name: "Đĩa",
          quantity: 80,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: 1,
          name: "Tô",
          quantity: 40,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: 2,
          name: "Nồi cơm điện",
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: 2,
          name: "Nồi hấp",
          quantity: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: 2,
          name: "Bình xịt dầu",
          quantity: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: 2,
          name: "Thớt",
          quantity: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: 3,
          name: "Khuôn bánh",
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: 3,
          name: "lọ hoa",
          quantity: 100,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: 3,
          name: "Hoa giấy",
          quantity: 200,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: 3,
          name: "khăn trải bàn",
          quantity: 50,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: 3,
          name: "Khung ảnh",
          quantity: 30,
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
