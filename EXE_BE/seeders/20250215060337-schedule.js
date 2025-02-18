'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Schedules',
      [
        {
          userId: 2,
          name: "Bob Johnson",
          content: "Ca sáng: 8:00 - 12:00, Họp nhóm dự án lúc 10:00",
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 18,
          name: "Pamela Anderson",
          content: "Ca chiều: 13:00 - 17:00, Kiểm tra báo cáo quý",
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 23,
          name: "Bob Johnson",
          content: "Ca tối: 18:00 - 22:00, Hỗ trợ khách hàng trực tuyến",
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 15,
          name: "Ian Malcolm",
          content: "Ca sáng: 9:00 - 13:00, Nghiên cứu thị trường",
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 13,
          name: "Pamela Anderson",
          content: "Ca chiều: 14:00 - 18:00, Đào tạo nhân viên mới",
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 10,
          name: "Jack Sparrow",
          content: "Ca đêm: 22:00 - 02:00, Giám sát hệ thống",
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 15,
          name: "Oliver Twist",
          content: "Ca sáng: 7:00 - 11:00, Chuẩn bị nguyên liệu",
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 7,
          name: "George Washington",
          content: "Ca chiều: 15:00 - 19:00, Quản lý kho",
          date: new Date(),
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
