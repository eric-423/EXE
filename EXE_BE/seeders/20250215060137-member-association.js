'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('MemberAssociations', [
      { name: "Alice Smith", point: 95, createdAt: new Date(), updatedAt: new Date() },
      { name: "Bob Johnson", point: 92, createdAt: new Date(), updatedAt: new Date() },
      { name: "Charlie Brown", point: 88, createdAt: new Date(), updatedAt: new Date() },
      { name: "Diana Prince", point: 91, createdAt: new Date(), updatedAt: new Date() },
      { name: "Edward Elric", point: 87, createdAt: new Date(), updatedAt: new Date() },
      { name: "Fiona Gallagher", point: 83, createdAt: new Date(), updatedAt: new Date() },
      { name: "George Washington", point: 90, createdAt: new Date(), updatedAt: new Date() },
      { name: "Hannah Montana", point: 86, createdAt: new Date(), updatedAt: new Date() },
      { name: "Ian Malcolm", point: 89, createdAt: new Date(), updatedAt: new Date() },
      { name: "Jack Sparrow", point: 84, createdAt: new Date(), updatedAt: new Date() },
      { name: "Katherine Johnson", point: 85, createdAt: new Date(), updatedAt: new Date() },
      { name: "Liam Neeson", point: 82, createdAt: new Date(), updatedAt: new Date() },
      { name: "Mia Wallace", point: 81, createdAt: new Date(), updatedAt: new Date() },
      { name: "Nina Simone", point: 78, createdAt: new Date(), updatedAt: new Date() },
      { name: "Oliver Twist", point: 76, createdAt: new Date(), updatedAt: new Date() },
      { name: "Pamela Anderson", point: 80, createdAt: new Date(), updatedAt: new Date() },
      { name: "Quentin Tarantino", point: 93, createdAt: new Date(), updatedAt: new Date() },
      { name: "Rachel Green", point: 79, createdAt: new Date(), updatedAt: new Date() },
      { name: "Steve Jobs", point: 94, createdAt: new Date(), updatedAt: new Date() },
      { name: "Tina Fey", point: 77, createdAt: new Date(), updatedAt: new Date() },
      { name: "Uma Thurman", point: 74, createdAt: new Date(), updatedAt: new Date() }
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
