'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        type: 1,
        name: "Cơm tấm sườn bì chả",
        branch: 1,
        description: "Cơm tấm sườn bì chả",
        price: 83000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 1,
        name: "Cơm tấm sườn bì chả",
        branch: 2,
        description: "Cơm tấm sườn bì chả",
        price: 83000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 1,
        name: "Cơm tấm sườn bì chả",
        branch: 3,
        description: "Cơm tấm sườn bì chả",
        price: 83000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 1,
        name: "Cơm tấm sườn bì chả",
        branch: 4,
        description: "Cơm tấm sườn bì chả",
        price: 83000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 1,
        name: "Cơm tấm sườn bì chả",
        branch: 5,
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
        branch: 1,
        description: "Cơm tấm sườn ",
        price: 60000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 1,
        name: "Cơm tấm sườn",
        branch: 2,
        description: "Cơm tấm sườn ",
        price: 60000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 1,
        name: "Cơm tấm sườn",
        branch: 3,
        description: "Cơm tấm sườn ",
        price: 60000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 1,
        name: "Cơm tấm sườn",
        branch: 4,
        description: "Cơm tấm sườn ",
        price: 60000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 1,
        name: "Cơm tấm sườn",
        branch: 5,
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
        branch: 1,
        description: "Cơm tấm",
        price: 83000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 2,
        name: "Cơm thêm",
        branch: 2,
        description: "Cơm tấm",
        price: 83000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 2,
        name: "Cơm thêm",
        branch: 3,
        description: "Cơm tấm",
        price: 83000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 2,
        name: "Cơm thêm",
        branch: 4,
        description: "Cơm tấm",
        price: 83000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 2,
        name: "Cơm thêm",
        branch: 5,
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
        branch: 1,
        description: "chỉ có sường và trứng",
        price: 70000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 1,
        name: "Cơm tấm sườn trứng",
        branch: 2,
        description: "chỉ có sường và trứng",
        price: 70000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 1,
        name: "Cơm tấm sườn trứng",
        branch: 3,
        description: "chỉ có sường và trứng",
        price: 70000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 1,
        name: "Cơm tấm sườn trứng",
        branch: 4,
        description: "chỉ có sường và trứng",
        price: 70000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 1,
        name: "Cơm tấm sườn trứng",
        branch: 5,
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
        branch: 1,
        description: "Cơm tấm sườn bì chả",
        price: 20000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 2,
        name: "sường",
        branch: 2,
        description: "Cơm tấm sườn bì chả",
        price: 20000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 2,
        name: "sường",
        branch: 3,
        description: "Cơm tấm sườn bì chả",
        price: 20000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 2,
        name: "sường",
        branch: 4,
        description: "Cơm tấm sườn bì chả",
        price: 20000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 2,
        name: "sường",
        branch: 5,
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
        branch: 1,
        description: "chỉ có trứng",
        price: 10000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 1,
        name: "Trứng",
        branch: 2,
        description: "chỉ có trứng",
        price: 10000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 1,
        name: "Trứng",
        branch: 3,
        description: "chỉ có trứng",
        price: 10000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 1,
        name: "Trứng",
        branch: 4,
        description: "chỉ có trứng",
        price: 10000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 1,
        name: "Trứng",
        branch: 5,
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
        branch: 1,
        description: "Canh chua chua chua chua",
        price: 30000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 3,
        name: "Canh chua cá lóc",
        branch: 2,
        description: "Canh chua chua chua chua",
        price: 30000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 3,
        name: "Canh chua cá lóc",
        branch: 3,
        description: "Canh chua chua chua chua",
        price: 30000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 3,
        name: "Canh chua cá lóc",
        branch: 4,
        description: "Canh chua chua chua chua",
        price: 30000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 3,
        name: "Canh chua cá lóc",
        branch: 5,
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
        branch: 1,
        description: "cành ngọt ngọt ngọt",
        price: 30000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 3,
        name: "Canh cà chua trứng",
        branch: 2,
        description: "cành ngọt ngọt ngọt",
        price: 30000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 3,
        name: "Canh cà chua trứng",
        branch: 3,
        description: "cành ngọt ngọt ngọt",
        price: 30000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 3,
        name: "Canh cà chua trứng",
        branch: 4,
        description: "cành ngọt ngọt ngọt",
        price: 30000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 3,
        name: "Canh cà chua trứng",
        branch: 5,
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
        branch: 1,
        description: "chỉ có tôm với bí đao",
        price: 30000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 3,
        name: "Canh bí đao tôm",
        branch: 2,
        description: "chỉ có tôm với bí đao",
        price: 30000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 3,
        name: "Canh bí đao tôm",
        branch: 3,
        description: "chỉ có tôm với bí đao",
        price: 30000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 3,
        name: "Canh bí đao tôm",
        branch: 4,
        description: "chỉ có tôm với bí đao",
        price: 30000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 3,
        name: "Canh bí đao tôm",
        branch: 5,
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
        branch: 1,
        description: "chỉ có bí màu cam",
        price: 30000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 3,
        name: "Canh bí đỏ",
        branch: 2,
        description: "chỉ có bí màu cam",
        price: 30000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 3,
        name: "Canh bí đỏ",
        branch: 3,
        description: "chỉ có bí màu cam",
        price: 30000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 3,
        name: "Canh bí đỏ",
        branch: 4,
        description: "chỉ có bí màu cam",
        price: 30000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 3,
        name: "Canh bí đỏ",
        branch: 5,
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
        branch: 1,
        description: "Rau câu ngọt ngọt ngọt",
        price: 20000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 4,
        name: "Rau câu",
        branch: 2,
        description: "Rau câu ngọt ngọt ngọt",
        price: 20000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 4,
        name: "Rau câu",
        branch: 3,
        description: "Rau câu ngọt ngọt ngọt",
        price: 20000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 4,
        name: "Rau câu",
        branch: 4,
        description: "Rau câu ngọt ngọt ngọt",
        price: 20000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 4,
        name: "Rau câu",
        branch: 5,
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
        branch: 1,
        description: "Chè đậu đỏ sau khi ăn ngon ơi là ngon",
        price: 20000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 4,
        name: "Chè đậu đỏ",
        branch: 2,
        description: "Chè đậu đỏ sau khi ăn ngon ơi là ngon",
        price: 20000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 4,
        name: "Chè đậu đỏ",
        branch: 3,
        description: "Chè đậu đỏ sau khi ăn ngon ơi là ngon",
        price: 20000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 4,
        name: "Chè đậu đỏ",
        branch: 4,
        description: "Chè đậu đỏ sau khi ăn ngon ơi là ngon",
        price: 20000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 4,
        name: "Chè đậu đỏ",
        branch: 5,
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
        branch: 1,
        description: "Chè đậu xanh ăn vô mát lắm",
        price: 20000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 4,
        name: "Chè đậu xanh",
        branch: 2,
        description: "Chè đậu xanh ăn vô mát lắm",
        price: 20000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 4,
        name: "Chè đậu xanh",
        branch: 3,
        description: "Chè đậu xanh ăn vô mát lắm",
        price: 20000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        type: 4,
        name: "Chè đậu xanh",
        branch: 4,
        description: "Chè đậu xanh ăn vô mát lắm",
        price: 20000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 4,
        name: "Chè đậu xanh",
        branch: 5,
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
        branch: 1,
        description: "Nước mía ún sau khi ăn ngon lắm đó",
        price: 20000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 5,
        name: "Nước mía",
        branch: 2,
        description: "Nước mía ún sau khi ăn ngon lắm đó",
        price: 20000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 5,
        name: "Nước mía",
        branch: 3,
        description: "Nước mía ún sau khi ăn ngon lắm đó",
        price: 20000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 5,
        name: "Nước mía",
        branch: 4,
        description: "Nước mía ún sau khi ăn ngon lắm đó",
        price: 20000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 5,
        name: "Nước mía",
        branch: 5,
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
        branch: 1,
        description: "chỉ cần 1 ly nước cam, mát cả ngày",
        price: 20000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 5,
        name: "Nước cam",
        branch: 2,
        description: "chỉ cần 1 ly nước cam, mát cả ngày",
        price: 20000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 5,
        name: "Nước cam",
        branch: 3,
        description: "chỉ cần 1 ly nước cam, mát cả ngày",
        price: 20000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 5,
        name: "Nước cam",
        branch: 4,
        description: "chỉ cần 1 ly nước cam, mát cả ngày",
        price: 20000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 5,
        name: "Nước cam",
        branch: 5,
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
        branch: 1,
        description: "Nước dừa mát lắm mời bạn uống nha",
        price: 20000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 5,
        name: "Nước dừa",
        branch: 2,
        description: "Nước dừa mát lắm mời bạn uống nha",
        price: 20000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 5,
        name: "Nước dừa",
        branch: 3,
        description: "Nước dừa mát lắm mời bạn uống nha",
        price: 20000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 5,
        name: "Nước dừa",
        branch: 4,
        description: "Nước dừa mát lắm mời bạn uống nha",
        price: 20000,
        stockQuantity: 1,
        img: "https://media.cooky.vn/recipe/g3/22207/s800x500/cooky-recipe-cover-r22207.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 5,
        name: "Nước dừa",
        branch: 5,
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
