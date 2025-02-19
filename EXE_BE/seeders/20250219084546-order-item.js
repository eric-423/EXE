'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('OrderItems', [
      {
        orderId: 1,
        productId: 1,
        quantity: 3,
        price: 130.00,
        note: "Please handle with care",
        feedback: "",
        isFeedback: false,
        feedbackPoint: 0,
        experiedFeedbackTime: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        orderId: 2,
        productId: 2,
        quantity: 1,
        price: 75.00,
        note: "Deliver during business hours",
        feedback: "",
        isFeedback: false,
        feedbackPoint: 0,
        experiedFeedbackTime: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        orderId: 3,
        productId: 3,
        quantity: 1,
        price: 200.00,
        note: "Leave at front door",
        feedback: "",
        isFeedback: false,
        feedbackPoint: 0,
        experiedFeedbackTime: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        orderId: 4,
        productId: 4,
        quantity: 4,
        price: 400.00,
        note: "Confirm delivery by phone",
        feedback: "",
        isFeedback: false,
        feedbackPoint: 0,
        experiedFeedbackTime: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        orderId: 5,
        productId: 5,
        quantity: 1,
        price: 50.00,
        note: "Customer cancelled order",
        feedback: "",
        isFeedback: false,
        feedbackPoint: 0,
        experiedFeedbackTime: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        orderId: 6,
        productId: 6,
        quantity: 2,
        price: 120.00,
        note: "Customer returned due to defect",
        feedback: "",
        isFeedback: false,
        feedbackPoint: 0,
        experiedFeedbackTime: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        orderId: 7,
        productId: 7,
        quantity: 3,
        price: 300.00,
        note: "Refund processed",
        feedback: "",
        isFeedback: false,
        feedbackPoint: 0,
        experiedFeedbackTime: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        orderId: 8,
        productId: 8,
        quantity: 1,
        price: 70.00,
        note: "Gift wrapping required",
        feedback: "",
        isFeedback: false,
        feedbackPoint: 0,
        experiedFeedbackTime: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        orderId: 9,
        productId: 9,
        quantity: 5,
        price: 500.00,
        note: "High value order, handle with care",
        feedback: "",
        isFeedback: false,
        feedbackPoint: 0,
        experiedFeedbackTime: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        orderId: 10,
        productId: 10,
        quantity: 2,
        price: 175.00,
        note: "Express shipping requested.",
        feedback: "",
        isFeedback: false,
        feedbackPoint: 0,
        experiedFeedbackTime: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        orderId: 11,
        productId: 11,
        quantity: 3,
        price: 270.00,
        note: "Please call before delivery.",
        feedback: "",
        isFeedback: false,
        feedbackPoint: 0,
        experiedFeedbackTime: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        orderId: 12,
        productId: 12,
        quantity: 1,
        price: 45.00,
        note: "Customer cancelled due to late delivery.",
        feedback: "",
        isFeedback: false,
        feedbackPoint: 0,
        experiedFeedbackTime: new Date(),
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
