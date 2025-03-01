'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Notifications', [
      {
        type: 1,
        receiver: 1,
        name: "New Follower",
        content: "User A đã theo dõi bạn!",
        refLink: "/profile/userA",
        isSeen: false,
        createdAt: "2025-02-16",
        updatedAt: "2025-02-16"
      },
      {
        type: 2,
        receiver: 3,
        name: "New Like",
        content: "User B đã thích bài viết của bạn.",
        refLink: "/post/123",
        isSeen: false,
        createdAt: "2025-02-16",
        updatedAt: "2025-02-16"
      },
      {
        type: 3,
        receiver: 5,
        name: "New Comment",
        content: "User C đã bình luận về bài viết của bạn: 'Bình luận hay!'",
        refLink: "/post/123",
        isSeen: false,
        createdAt: "2025-02-16",
        updatedAt: "2025-02-16"
      },
      {
        type: 4,
        receiver: 7,
        name: "New Reply",
        content: "User D đã trả lời bình luận của bạn.",
        refLink: "/post/123",
        isSeen: false,
        createdAt: "2025-02-16",
        updatedAt: "2025-02-16"
      },
      {
        type: 5,
        receiver: 2,
        name: "New Mention",
        content: "User E đã nhắc đến bạn trong một bài viết.",
        refLink: "/post/456",
        isSeen: false,
        createdAt: "2025-02-16",
        updatedAt: "2025-02-16"
      },
      {
        type: 6,
        receiver: 4,
        name: "New member",
        content: "User F đã gia nhập nhóm của bạn.",
        refLink: "/group/789",
        isSeen: false,
        createdAt: "2025-02-16",
        updatedAt: "2025-02-16"
      },
      {
        type: 2,
        receiver: 6,
        name: "New Like",
        content: "User G đã thích ảnh của bạn.",
        refLink: "/image/101",
        isSeen: true,
        createdAt: "2025-02-16",
        updatedAt: "2025-02-16"
      },
      {
        type: 3,
        receiver: 8,
        name: "New Comment",
        content: "User H đã bình luận về video của bạn: 'Video rất thú vị!'",
        refLink: "/video/202",
        isSeen: false,
        createdAt: "2025-02-16",
        updatedAt: "2025-02-16"
      },
      {
        type: 1,
        receiver: 10,
        name: "New Follower",
        content: "User J đã theo dõi bạn!",
        refLink: "/profile/userJ",
        isSeen: false,
        createdAt: "2025-02-16",
        updatedAt: "2025-02-16"
      },
      {
        type: 6,
        receiver: 6,
        name: "New member",
        content: "User K đã gia nhập nhóm của bạn.",
        refLink: "/group/456",
        isSeen: false,
        createdAt: "2025-02-16",
        updatedAt: "2025-02-16"
      },
      {
        type: 4,
        receiver: 8,
        name: "New Reply",
        content: "User L đã trả lời bình luận của bạn trong nhóm.",
        refLink: "/group/456/comment/123",
        isSeen: true,
        createdAt: "2025-02-16",
        updatedAt: "2025-02-16"
      },
      {
        type: 5,
        receiver: 10,
        name: "New Mention",
        content: "User M đã nhắc đến bạn trong một story.",
        refLink: "/story/789",
        isSeen: false,
        createdAt: "2025-02-16",
        updatedAt: "2025-02-16"
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
