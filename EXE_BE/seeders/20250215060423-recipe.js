'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Recipes',
      [
        {
          product: 2,
          name: "Bob Johnson",
          ingredients: "2 lát bánh mì, 2 lát thịt nguội, 1 lát phô mai, rau diếp, sốt mayonnaise",
          instructions: "Phết mayonnaise lên một lát bánh mì. Xếp rau diếp, thịt nguội và phô mai lên trên. Đặt lát bánh mì còn lại lên trên cùng. Cắt đôi và thưởng thức!",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          product: 11,
          name: "Sally Smith",
          ingredients: "1 quả trứng, 1 muỗng canh sữa, muối, tiêu, bơ",
          instructions: "Đánh trứng với sữa, muối và tiêu. Đun chảy bơ trong chảo. Đổ hỗn hợp trứng vào chảo. Chiên cho đến khi chín tới, lật mặt và chiên thêm một chút. Dọn ra đĩa và thưởng thức!",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          product: 16,
          name: "Joe Brown",
          ingredients: "Mì gói, nước sôi, gói gia vị",
          instructions: "Đun sôi nước. Cho mì gói vào tô. Đổ nước sôi vào tô. Đậy nắp và chờ 3 phút. Cho gói gia vị vào và trộn đều. Thưởng thức!",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          product: 10,
          name: "Jane Doe",
          ingredients: "1 quả chuối, 1/2 cốc sữa chua, 1/4 cốc sữa, 1 muỗng canh mật ong",
          instructions: "Cho chuối, sữa chua, sữa và mật ong vào máy xay sinh tố. Xay cho đến khi mịn. Đổ ra ly và thưởng thức!",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          product: 2,
          name: "John Smith",
          ingredients: "Cơm trắng, trứng gà, hành lá, nước tương, dầu ăn",
          instructions: "Đập trứng vào bát, thêm chút nước tương đánh tan. Phi thơm hành, cho trứng vào chiên tơi. Cho cơm vào đảo đều đến khi săn lại. Nêm nếm gia vị vừa ăn. Rắc hành lá và thưởng thức.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          product: 11,
          name: "Jane Smith",
          ingredients: "Bánh mì sandwich, bơ đậu phộng, mứt",
          instructions: "Phết bơ đậu phộng lên một lát bánh mì. Phết mứt lên lát bánh mì còn lại. Úp hai lát bánh mì vào nhau. Cắt đôi và thưởng thức!",
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
