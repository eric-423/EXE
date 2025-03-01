'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Warehouses', [
      {
        address: "128/9, Đường Lê Văn Sỹ, Quận 3, TP. Hồ Chí Minh",
        branchId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        address: "435/12, Đường Phố Huế, Quận Hai Bà Trưng, Hà Nội",
        branchId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        address: "78/103, Đường Nguyễn Văn Linh, Thành phố Đà Nẵng",
        branchId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        address: "1024/72, Đường Trần Khánh Dư, Thành phố Nha Trang",
        branchId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        address: "21/22, Đường Nguyễn Thái Học, Thành phố Huế",
        branchId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        address: "Đường Hùng Vương, Thành phố Cần Thơ",
        branchId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        address: "16/27, Đường Lê Lai, Thành phố Hải Phòng",
        branchId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        address: "14, Đường Nguyễn Tất Thành, Thành phố Vũng Tàu",
        branchId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        address: "73/2/8, Đường Trần Phú, Thành phố Quy Nhơn",
        branchId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        address: "Đường Ngô Quyền, Thành phố Biên Hòa, Đồng Nai",
        branchId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
      , {});

  },

  async down(queryInterface, Sequelize) { }
};
