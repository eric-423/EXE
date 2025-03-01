'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Information', [
      {
        userId: 1,
        name: "Alice Smith",
        address: "123 Main St, City A",
        phoneNumber: "0123456789",
        isDefault: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        name: "Bob Johnson",
        address: "456 Elm St, City B",
        phoneNumber: "9876543210",
        isDefault: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        name: "Charlie Brown",
        address: "789 Oak St, City C",
        phoneNumber: "0123987654",
        isDefault: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        name: "Diana Prince",
        address: "321 Pine St, City D",
        phoneNumber: "0987654321",
        isDefault: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        name: "Edward Elric",
        address: "654 Maple St, City E",
        phoneNumber: "1234567890",
        isDefault: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 6,
        name: "Fiona Gallagher",
        address: "789 Birch St, City F",
        phoneNumber: "2345678901",
        isDefault: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 7,
        name: "George Washington",
        address: "456 Cedar St, City G",
        phoneNumber: "3456789012",
        isDefault: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 8,
        name: "Hannah Montana",
        address: "123 Spruce St, City H",
        phoneNumber: "4567890123",
        isDefault: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 9,
        name: "Trinh Dinh Ngoc An",
        address: "654 Walnut St, City I",
        phoneNumber: "5678901234",
        isDefault: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 10,
        name: "Trương Quang Hiếu Trung",
        address: "321 Chestnut St, City J",
        phoneNumber: "6789012345",
        isDefault: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 11,
        name: "Ian Malcolm",
        address: "789 Ash St, City K",
        phoneNumber: "7890123456",
        isDefault: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 12,
        name: "Jack Sparrow",
        address: "456 Fir St, City L",
        phoneNumber: "8901234567",
        isDefault: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 13,
        name: "Katherine Johnson",
        address: "321 Redwood St, City M",
        phoneNumber: "9012345678",
        isDefault: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 14,
        name: "Liam Neeson",
        address: "123 Palm St, City N",
        phoneNumber: "0123456789",
        isDefault: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 15,
        name: "Mia Wallace",
        address: "456 Willow St, City O",
        phoneNumber: "9876543210",
        isDefault: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 16,
        name: "Nina Simone",
        address: "789 Poplar St, City P",
        phoneNumber: "0123987654",
        isDefault: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 17,
        name: "Oliver Twist",
        address: "321 Maple St, City Q",
        phoneNumber: "0987654321",
        isDefault: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 18,
        name: "Pamela Anderson",
        address: "654 Hickory St, City R",
        phoneNumber: "1234567890",
        isDefault: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 19,
        name: "Quentin Tarantino",
        address: "789 Beech St, City S",
        phoneNumber: "2345678901",
        isDefault: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 20,
        name: "Rachel Green",
        address: "456 Cypress St, City T",
        phoneNumber: "3456789012",
        isDefault: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 21,
        name: "Steve Jobs",
        address: "123 Fir St, City U",
        phoneNumber: "4567890123",
        isDefault: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 22,
        name: "Tina Fey",
        address: "321 Elm St, City V",
        phoneNumber: "5678901234",
        isDefault: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 23,
        name: "Uma Thurman",
        address: "654 Oak St, City W",
        phoneNumber: "6789012345",
        isDefault: true,
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
