'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Blogs',
      [
        {
          author: 2,
          type: 1,
          title: "Truyền thông số: Xu hướng và thách thức",
          content: "Bài viết này phân tích các xu hướng truyền thông số mới nhất và những thách thức mà các nhà truyền thông phải đối mặt trong kỷ nguyên số.",
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          author: 11,
          type: 5,
          title: "5 Mẹo giữ gìn sức khỏe cho cả gia đình",
          content: "Chia sẻ 5 mẹo đơn giản nhưng hiệu quả để giúp cả gia đình bạn luôn khỏe mạnh và tràn đầy năng lượng.",
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          author: 25,
          type: 2,
          title: "Marketing du kích: Sáng tạo và hiệu quả",
          content: "Khám phá các chiến lược marketing du kích sáng tạo và cách chúng có thể giúp doanh nghiệp của bạn nổi bật.",
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          author: 34,
          type: 3,
          title: "Bí quyết xây dựng gia đình hạnh phúc",
          content: "Những lời khuyên hữu ích để xây dựng một gia đình hạnh phúc, gắn kết và yêu thương.",
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          author: 41,
          type: 4,
          title: "Nuôi dạy con thông minh cảm xúc",
          content: "Hướng dẫn cách nuôi dạy con cái trở thành những người thông minh cảm xúc, tự tin và thành công.",
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
