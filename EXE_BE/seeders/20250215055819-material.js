'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Materials', [
      {
        warehouseId: 1,
        type: 5,
        name: "Thịt nướng",
        quantity: 200,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        warehouseId: 3,
        type: 3,
        name: "Sườn nướng",
        quantity: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        warehouseId: 6,
        type: 7,
        name: "Bì",
        quantity: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        warehouseId: 8,
        type: 1,
        name: "Trứng ốp la",
        quantity: 200,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        warehouseId: 5,
        type: 6,
        name: "Đậu hũ chiên",
        quantity: 300,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        warehouseId: 2,
        type: 4,
        name: "Nước mắm chua ngọt",
        quantity: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        warehouseId: 4,
        type: 10,
        name: "Dưa leo",
        quantity: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        warehouseId: 9,
        type: 2,
        name: "Rau sống",
        quantity: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        warehouseId: 7,
        type: 9,
        name: "Mỡ hành",
        quantity: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        warehouseId: 10,
        type: 8,
        name: "Hành phi",
        quantity: 177,
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
