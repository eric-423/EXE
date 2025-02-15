'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        type: 1,
        name: "Cơm tấm sườn bì chả",
        description: "Cơm tấm sườn bì chả",
        price: 83000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 1,
        name: "Cơm tấm sườn",
        description: "Cơm tấm sườn ",
        price: 60000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 2,
        name: "Cơm thêm",
        description: "Cơm tấm",
        price: 83000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 1,
        name: "Cơm tấm sườn trứng",
        description: "chỉ có sường và trứng",
        price: 70000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 2,
        name: "sường",
        description: "Cơm tấm sườn bì chả",
        price: 20000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 1,
        name: "Trứng",
        description: "chỉ có trứng",
        price: 10000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 3,
        name: "Canh chua cá lóc",
        description: "Canh chua chua chua chua",
        price: 30000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 3,
        name: "Canh cà chua trứng",
        description: "cành ngọt ngọt ngọt",
        price: 30000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 3,
        name: "Canh bí đao tôm",
        description: "chỉ có tôm với bí đao",
        price: 30000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 3,
        name: "Canh bí đỏ",
        description: "chỉ có bí màu cam",
        price: 30000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 4,
        name: "Rau câu",
        description: "Rau câu ngọt ngọt ngọt",
        price: 20000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 4,
        name: "Chè đậu đỏ",
        description: "Chè đậu đỏ sau khi ăn ngon ơi là ngon",
        price: 20000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 4,
        name: "Chè đậu xanh",
        description: "Chè đậu xanh ăn vô mát lắm",
        price: 20000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 5,
        name: "Nước mía",
        description: "Nước mía ún sau khi ăn ngon lắm đó",
        price: 20000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 5,
        name: "Nước cam",
        description: "chỉ cần 1 ly nước cam, mát cả ngày",
        price: 20000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 5,
        name: "Nước dừa",
        description: "Nước dừa mát lắm mời bạn uống nha",
        price: 20000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
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
