'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tasks', [
      {
        status: 1,
        assignedTo: 6,
        createdBy: 1,
        name: "Thiết kế giao diện người dùng",
        description: "Tạo giao diện người dùng thân thiện và hấp dẫn.",
        dueDate: "2025-03-22",
        doneAt: null,
        createdAt: "2025-02-15",
        updatedAt: "2025-02-15"
      },
      {
        status: 2,
        assignedTo: 7,
        createdBy: 2,
        name: "Viết tài liệu hướng dẫn sử dụng",
        description: "Soạn thảo tài liệu hướng dẫn sử dụng chi tiết.",
        dueDate: "2025-03-01",
        doneAt: null,
        createdAt: "2025-02-15",
        updatedAt: "2025-02-15"
      },
      {
        status: 3,
        assignedTo: 11,
        createdBy: 3,
        name: "Kiểm thử phần mềm",
        description: "Tìm và báo cáo các lỗi trong phần mềm.",
        dueDate: "2025-02-28",
        doneAt: "2025-02-27",
        createdAt: "2025-02-15",
        updatedAt: "2025-02-15"
      },
      {
        status: 4,
        assignedTo: 12,
        createdBy: 4,
        name: "Triển khai hệ thống",
        description: "Cài đặt và cấu hình hệ thống trên máy chủ.",
        dueDate: "2025-03-08",
        doneAt: null,
        createdAt: "2025-02-15",
        updatedAt: "2025-02-15"
      },
      {
        status: 1,
        assignedTo: 13,
        createdBy: 5,
        name: "Bảo trì hệ thống",
        description: "Đảm bảo hệ thống hoạt động ổn định và hiệu quả.",
        dueDate: "2025-03-15",
        doneAt: null,
        createdAt: "2025-02-15",
        updatedAt: "2025-02-15"
      },
      {
        status: 2,
        assignedTo: 16,
        createdBy: 8,
        name: "Hỗ trợ khách hàng",
        description: "Giải đáp thắc mắc và giải quyết vấn đề cho khách hàng.",
        dueDate: "2025-03-01",
        doneAt: null,
        createdAt: "2025-02-15",
        updatedAt: "2025-02-15"
      },
      {
        status: 3,
        assignedTo: 17,
        createdBy: 9,
        name: "Phân tích dữ liệu",
        description: "Tìm kiếm thông tin hữu ích từ dữ liệu.",
        dueDate: "2025-03-22",
        doneAt: "2025-03-21",
        createdAt: "2025-02-15",
        updatedAt: "2025-02-15"
      },
      {
        status: 4,
        assignedTo: 21,
        createdBy: 10,
        name: "Quản lý dự án",
        description: "Lập kế hoạch, điều phối và theo dõi tiến độ dự án.",
        dueDate: "2025-04-01",
        doneAt: null,
        createdAt: "2025-02-15",
        updatedAt: "2025-02-15"
      },
      {
        status: 1,
        assignedTo: 6,
        createdBy: 1,
        name: "Xây dựng chiến lược kinh doanh",
        description: "Phát triển chiến lược kinh doanh dài hạn.",
        dueDate: "2025-03-15",
        doneAt: null,
        createdAt: "2025-02-15",
        updatedAt: "2025-02-15"
      },
      {
        status: 2,
        assignedTo: 7,
        createdBy: 2,
        name: "Đàm phán hợp đồng",
        description: "Thương lượng và ký kết hợp đồng với đối tác.",
        dueDate: "2025-02-22",
        doneAt: null,
        createdAt: "2025-02-15",
        updatedAt: "2025-02-15"
      },
      {
        status: 3,
        assignedTo: 11,
        createdBy: 3,
        name: "Nghiên cứu và phát triển sản phẩm mới",
        description: "Tìm kiếm ý tưởng và phát triển sản phẩm mới.",
        dueDate: "2025-03-01",
        doneAt: "2025-02-28",
        createdAt: "2025-02-15",
        updatedAt: "2025-02-15"
      },
      {
        status: 4,
        assignedTo: 12,
        createdBy: 4,
        name: "Tổ chức sự kiện",
        description: "Lập kế hoạch và tổ chức các sự kiện quảng bá.",
        dueDate: "2025-03-08",
        doneAt: null,
        createdAt: "2025-02-15",
        updatedAt: "2025-02-15"
      },
      {
        status: 1,
        assignedTo: 13,
        createdBy: 5,
        name: "Quản lý tài chính",
        description: "Theo dõi và quản lý các hoạt động tài chính.",
        dueDate: "2025-04-01",
        doneAt: null,
        createdAt: "2025-02-15",
        updatedAt: "2025-02-15"
      },
      {
        status: 2,
        assignedTo: 16,
        createdBy: 8,
        name: "Quản lý nhân sự",
        description: "Tuyển dụng, đào tạo và quản lý nhân viên.",
        dueDate: "2025-03-22",
        doneAt: null,
        createdAt: "2025-02-15",
        updatedAt: "2025-02-15"
      },
      {
        status: 3,
        assignedTo: 17,
        createdBy: 9,
        name: "Quản lý kho",
        description: "Theo dõi và quản lý hàng tồn kho.",
        dueDate: "2025-03-15",
        doneAt: "2025-03-14",
        createdAt: "2025-02-15",
        updatedAt: "2025-02-15"
      },
      {
        status: 4,
        assignedTo: 21,
        createdBy: 10,
        name: "Quản lý chất lượng",
        description: "Đảm bảo chất lượng sản phẩm và dịch vụ.",
        dueDate: "2025-03-01",
        doneAt: null,
        createdAt: "2025-02-15",
        updatedAt: "2025-02-15"
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
