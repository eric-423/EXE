'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Promotions',
      [
        {
          type: 1,
          createdBy: 5,
          name: "Giảm 10% cho đơn hàng đầu tiên",
          description: "Chào mừng bạn đến với quán Cơm Tấm Ngon! Giảm ngay 10% cho đơn hàng đầu tiên của bạn khi đặt qua ứng dụng.",
          startDate: new Date(),
          endDate: new Date(),
          value: 10,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: 5,
          createdBy: 10,
          name: "Mua 1 Cơm Tấm Sườn, Tặng 1 Trà Đá",
          description: "Thưởng thức combo ngon miệng: Mua 1 phần Cơm Tấm Sườn, tặng ngay 1 ly Trà Đá mát lạnh!",
          startDate: new Date(),
          endDate: new Date(),
          value: 10,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: 3,
          createdBy: 14,
          name: "Miễn phí giao hàng cho đơn từ 100k",
          description: "Đặt hàng Cơm Tấm Ngon với hóa đơn từ 100,000 VNĐ trở lên và được giao hàng hoàn toàn miễn phí!",
          startDate: new Date(),
          endDate: new Date(),
          value: 10,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: 2,
          createdBy: 21,
          name: "Tặng kèm canh miễn phí",
          description: "Mỗi phần cơm tấm sẽ được tặng kèm 1 chén canh miễn phí.",
          startDate: new Date(),
          endDate: new Date(),
          value: 10,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: 1,
          createdBy: 28,
          name: "Ưu đãi thành viên",
          description: "Khách hàng thành viên sẽ được giảm 5% trên tổng hoá đơn.",
          startDate: new Date(),
          endDate: new Date(),
          value: 10,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: 5,
          createdBy: 37,
          name: "Mua 2 tặng 1 lạp xưởng",
          description: "Khi mua 2 phần cơm tấm bất kỳ, bạn sẽ được tặng thêm 1 lạp xưởng.",
          startDate: new Date(),
          endDate: new Date(),
          value: 10,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: 3,
          createdBy: 44,
          name: "Freeship 5km",
          description: "Quán cơm tấm ngon freeship cho khách hàng trong vòng bán kính 5km.",
          startDate: new Date(),
          endDate: new Date(),
          value: 10,
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
