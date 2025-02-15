'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('MarketingCampaigns', [
      {
        createdBy: 2,
        name: "Bob Johnson",
        content: "Ra mắt sản phẩm mới: Giảm giá 20% trong tuần đầu tiên!",
        img: "url_anh_sp_moi_1.jpg",
        scheduledAt: new Date(),
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        createdBy: 18,
        name: "Pamela Anderson",
        content: "Ưu đãi đặc biệt: Mua 1 tặng 1 cho tất cả các sản phẩm!",
        img: "url_anh_km_mua1tang1.png",
        scheduledAt: new Date(),
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        createdBy: 25,
        name: "Bob Johnson",
        content: "Sự kiện ra mắt sản phẩm mới: Cơ hội nhận quà tặng hấp dẫn!",
        img: "url_anh_event_launch.jpeg",
        scheduledAt: new Date(),
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        createdBy: 34,
        name: "Ian Malcolm",
        content: "Khuyến mãi cuối tuần: Giảm giá sốc lên đến 50%!",
        img: "url_anh_sale_cuoituan.gif",
        scheduledAt: new Date(),
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        createdBy: 41,
        name: "Pamela Anderson",
        content: "Chương trình khách hàng thân thiết: Tích điểm đổi quà!",
        img: "url_anh_khachhangthanthiet.svg",
        scheduledAt: new Date(),
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        createdBy: 10,
        name: "Jack Sparrow",
        content: "Livestream giới thiệu sản phẩm mới: Tham gia để nhận ưu đãi!",
        img: "url_anh_livestream.bmp",
        scheduledAt: new Date(),
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        createdBy: 15,
        name: "Oliver Twist",
        content: "Minigame trên Facebook: Tham gia để có cơ hội trúng thưởng!",
        img: "url_anh_minigame.tiff",
        scheduledAt: new Date(),
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        createdBy: 7,
        name: "George Washington",
        content: "Thông báo về việc mở rộng chi nhánh mới tại Hà Nội!",
        img: "url_anh_mochi nhanh.ico",
        scheduledAt: new Date(),
        status: true,
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
