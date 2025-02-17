'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Branches', [
      {
        name: 'Headquarters',
        address: '123 Main St, New York, NY',
        phoneNumber: '123-456-7890',
        isParent: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'West Coast Branch',
        address: '456 Sunset Blvd, Los Angeles, CA',
        phoneNumber: '987-654-3210',
        isParent: false,
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        name: 'Midwest Branch',
        address: '789 Lakeshore Dr, Chicago, IL',
        phoneNumber: '555-123-4567',
        isParent: false,
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        name: 'South Branch',
        address: '101 South St, Miami, FL',
        phoneNumber: '321-654-9870',
        isParent: false,
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        name: 'Northeast Branch',
        address: '202 East Ave, Boston, MA',
        phoneNumber: '654-321-0987',
        isParent: false,
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        name: 'Pacific Branch',
        address: '303 West St, Seattle, WA',
        phoneNumber: '456-789-1234',
        isParent: false,
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        name: 'Central Branch',
        address: '404 Central Rd, Denver, CO',
        phoneNumber: '789-123-4560',
        isParent: false,
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        name: 'Northern Branch',
        address: '505 North St, Minneapolis, MN',
        phoneNumber: '159-753-4862',
        isParent: false,
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        name: 'Southwest Branch',
        address: '606 Sunset Blvd, Phoenix, AZ',
        phoneNumber: '753-159-8642',
        isParent: false,
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        name: 'Southeast Branch',
        address: '707 Bay St, Atlanta, GA',
        phoneNumber: '852-963-7410',
        isParent: false,
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
