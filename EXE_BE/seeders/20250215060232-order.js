'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Orders', [
      {
        customer: 1, // Alice Smith
        worker: 2, // John Doe
        branch: 3, // Random branch
        status: 1, // Pending
        paymentMethod: 1, // Credit Card
        quantity: 3,
        subtotal: 150.00,
        promotionCode: "SUMMER20",
        discountValue: 20,
        amount: 130.00,
        deliveryAt: new Date(2025, 2, 22), // March 22, 2025
        shippingFee: 10.00,
        note: "Please handle with care.",
        paymentCode: "CC12345",
        shippingAddress: "123 Main St, Anytown, CA 91234",
        shippingPhoneNumber: "555-123-4567",
        pointUsed: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        customer: 2, // Bob Johnson
        worker: 19, // John Doe
        branch: 7, // Random branch
        status: 2, // Processing
        paymentMethod: 2, // Debit Card
        quantity: 1,
        subtotal: 75.00,
        promotionCode: null,
        discountValue: 0,
        amount: 75.00,
        deliveryAt: new Date(2025, 2, 20), // March 20, 2025
        shippingFee: 8.00,
        note: "Deliver during business hours.",
        paymentCode: "DC67890",
        shippingAddress: "456 Oak Ave, Anytown, CA 91234",
        shippingPhoneNumber: "555-987-6543",
        pointUsed: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        customer: 3, // Charlie Brown
        worker: 5, // John Doe
        branch: 1, // Random branch
        status: 3, // Shipped
        paymentMethod: 3, // PayPal
        quantity: 2,
        subtotal: 200.00,
        promotionCode: "FREESHIP",
        discountValue: 0,
        amount: 200.00,
        deliveryAt: new Date(2025, 2, 18), // March 18, 2025
        shippingFee: 0.00,
        note: "Leave at front door.",
        paymentCode: "PP24680",
        shippingAddress: "789 Pine Ln, Anytown, CA 91234",
        shippingPhoneNumber: "555-246-8012",
        pointUsed: 50,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        customer: 4, // Diana Prince
        worker: 7, // John Doe
        branch: 5, // Random branch
        status: 4, // Delivered
        paymentMethod: 4, // Bank Transfer
        quantity: 4,
        subtotal: 400.00,
        promotionCode: null,
        discountValue: 0,
        amount: 400.00,
        deliveryAt: new Date(2025, 2, 10), // March 10, 2025
        shippingFee: 12.00,
        note: "Confirm delivery by phone.",
        paymentCode: "BT13579",
        shippingAddress: "101 Elm Rd, Anytown, CA 91234",
        shippingPhoneNumber: "555-135-7911",
        pointUsed: 200,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        customer: 5, // Edward Elric
        worker: 5, // John Doe
        branch: 9, // Random branch
        status: 5, // Cancelled
        paymentMethod: 5, // Cash on Delivery
        quantity: 1,
        subtotal: 50.00,
        promotionCode: null,
        discountValue: 0,
        amount: 50.00,
        deliveryAt: new Date(2025, 2, 16), // March 16, 2025
        shippingFee: 5.00,
        note: "Customer cancelled order.",
        paymentCode: null,
        shippingAddress: "222 Maple Dr, Anytown, CA 91234",
        shippingPhoneNumber: "555-864-2000",
        pointUsed: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        customer: 6, // Fiona Gallagher
        worker: 4, // John Doe
        branch: 6, // Random branch
        status: 6, // Returned
        paymentMethod: 6, // Mobile Payment
        quantity: 2,
        subtotal: 120.00,
        promotionCode: null,
        discountValue: 0,
        amount: 120.00,
        deliveryAt: new Date(2025, 2, 12), // March 12, 2025
        shippingFee: 7.00,
        note: "Customer returned due to defect.",
        paymentCode: "MP98765",
        shippingAddress: "333 Birch Ct, Anytown, CA 91234",
        shippingPhoneNumber: "555-753-0987",
        pointUsed: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        customer: 7, // George Washington
        worker: 6, // John Doe
        branch: 10, // Random branch
        status: 7, // Refunded
        paymentMethod: 7, // Cryptocurrency
        quantity: 3,
        subtotal: 300.00,
        promotionCode: null,
        discountValue: 0,
        amount: 300.00,
        deliveryAt: new Date(2025, 2, 14), // March 14, 2025
        shippingFee: 9.00,
        note: "Refund processed.",
        paymentCode: "CR54321",
        shippingAddress: "444 Cedar Ave, Anytown, CA 91234",
        shippingPhoneNumber: "555-210-4321",
        pointUsed: 150,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        customer: 8, // Hannah Montana
        worker: 8, // John Doe
        branch: 2, // Random branch
        status: 1, // Pending
        paymentMethod: 1, // Credit Card
        quantity: 1,
        subtotal: 80.00,
        promotionCode: "NEWUSER",
        discountValue: 10,
        amount: 70.00,
        deliveryAt: new Date(2025, 2, 23), // March 23, 2025
        shippingFee: 6.00,
        note: "Gift wrapping required.",
        paymentCode: "CC99999",
        shippingAddress: "555 Willow Ln, Anytown, CA 91234",
        shippingPhoneNumber: "555-111-2222",
        pointUsed: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        customer: 9, // Trinh Dinh Ngoc An
        worker: 8, // John Doe
        branch: 4, // Random branch
        status: 2, // Processing
        paymentMethod: 2, // Debit Card
        quantity: 5,
        subtotal: 500.00,
        promotionCode: null,
        discountValue: 0,
        amount: 500.00,
        deliveryAt: new Date(2025, 2, 21), // March 21, 2025
        shippingFee: 15.00,
        note: "High value order, handle with care.",
        paymentCode: "DC11223",
        shippingAddress: "666 Oak St, Anytown, CA 91234",
        shippingPhoneNumber: "555-333-4444",
        pointUsed: 250,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        customer: 10, // Trương Quang Hiếu Trung
        worker: 5, // John Doe
        branch: 8, // Random branch
        status: 3, // Shipped
        paymentMethod: 3, // PayPal
        quantity: 2,
        subtotal: 180.00,
        promotionCode: "LOYALTY",
        discountValue: 5,
        amount: 175.00,
        deliveryAt: new Date(2025, 2, 19), // March 19, 2025
        shippingFee: 0.00,
        note: "Express shipping requested.",
        paymentCode: "PP44556",
        shippingAddress: "777 Pine Ave, Anytown, CA 91234",
        shippingPhoneNumber: "555-555-6666",
        pointUsed: 75,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        customer: 11, // Ian Malcolm
        worker: 6, // John Doe
        branch: 1, // Random branch
        status: 4, // Delivered
        paymentMethod: 4, // Bank Transfer
        quantity: 3,
        subtotal: 270.00,
        promotionCode: null,
        discountValue: 0,
        amount: 270.00,
        deliveryAt: new Date(2025, 2, 11), // March 11, 2025
        shippingFee: 11.50,
        note: "Please call before delivery.",
        paymentCode: "BT98765",
        shippingAddress: "888 Sunset Blvd, Los Angeles, CA 90069",
        shippingPhoneNumber: "310-555-1212",
        pointUsed: 120,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        customer: 12, // Jack Sparrow
        worker: 4, // John Doe
        branch: 10, // Random branch
        status: 5, // Cancelled
        paymentMethod: 5, // Cash on Delivery
        quantity: 1,
        subtotal: 45.00,
        promotionCode: null,
        discountValue: 0,
        amount: 45.00,
        deliveryAt: new Date(2025, 2, 17), // March 17, 2025
        shippingFee: 4.50,
        note: "Customer cancelled due to late delivery.",
        paymentCode: null,
        shippingAddress: "999 Ocean Ave, Santa Monica, CA 90403",
        shippingPhoneNumber: "310-555-2323",
        pointUsed: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        customer: 13, // Katherine Johnson
        worker: 7, // John Doe
        branch: 6, // Random branch
        status: 6, // Returned
        paymentMethod: 6, // Mobile Payment
        quantity: 2,
        subtotal: 190.00,
        promotionCode: null,
        discountValue: 0,
        amount: 190.00,
        deliveryAt: new Date(2025, 2, 13), // March 13, 2025
        shippingFee: 8.50,
        note: "Returned due to wrong size.",
        paymentCode: "MP34567",
        shippingAddress: "111 Hollywood Blvd, Hollywood, CA 90028",
        shippingPhoneNumber: "323-555-3434",
        pointUsed: 80,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        customer: 14, // Liam Neeson
        worker: 5, // John Doe
        branch: 4, // Random branch
        status: 7, // Refunded
        paymentMethod: 7, // Cryptocurrency
        quantity: 4,
        subtotal: 360.00,
        promotionCode: null,
        discountValue: 0,
        amount: 360.00,
        deliveryAt: new Date(2025, 2, 15), // March 15, 2025
        shippingFee: 10.50,
        note: "Refund processed due to damaged item.",
        paymentCode: "CR67890",
        shippingAddress: "222 Rodeo Dr, Beverly Hills, CA 90210",
        shippingPhoneNumber: "310-555-4545",
        pointUsed: 180,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        customer: 15, // Mia Wallace
        worker: 7, // John Doe
        branch: 8, // Random branch
        status: 1, // Pending
        paymentMethod: 1, // Credit Card
        quantity: 1,
        subtotal: 95.00,
        promotionCode: "WELCOME15",
        discountValue: 15,
        amount: 80.75,
        deliveryAt: new Date(2025, 2, 24), // March 24, 2025
        shippingFee: 7.50,
        note: "Mark as fragile.",
        paymentCode: "CC22222",
        shippingAddress: "333 Melrose Ave, Los Angeles, CA 90046",
        shippingPhoneNumber: "323-555-5656",
        pointUsed: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        customer: 16, // Nina Simone
        worker: 6, // John Doe
        branch: 3, // Random branch
        status: 2, // Processing
        paymentMethod: 2, // Debit Card
        quantity: 5,
        subtotal: 425.00,
        promotionCode: null,
        discountValue: 0,
        amount: 425.00,
        deliveryAt: new Date(2025, 2, 22), // March 22, 2025
        shippingFee: 13.50,
        note: "Signature required upon delivery.",
        paymentCode: "DC44444",
        shippingAddress: "444 La Brea Ave, Los Angeles, CA 90036",
        shippingPhoneNumber: "323-555-6767",
        pointUsed: 220,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        customer: 17, // Oliver Twist
        worker: 8, // John Doe
        branch: 5, // Random branch
        status: 3, // Shipped
        paymentMethod: 3, // PayPal
        quantity: 2,
        subtotal: 210.00,
        promotionCode: "SHIPFREE",
        discountValue: 0,
        amount: 210.00,
        deliveryAt: new Date(2025, 2, 20), // March 20, 2025
        shippingFee: 0.00,
        note: "Handle with extreme care.",
        paymentCode: "PP77777",
        shippingAddress: "555 Fairfax Ave, Los Angeles, CA 90036",
        shippingPhoneNumber: "323-555-7878",
        pointUsed: 90,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        customer: 18, // Pamela Anderson
        worker: 8, // John Doe
        branch: 2, // Random branch
        status: 4, // Delivered
        paymentMethod: 4, // Bank Transfer
        quantity: 3,
        subtotal: 330.00,
        promotionCode: null,
        discountValue: 0,
        amount: 330.00,
        deliveryAt: new Date(2025, 2, 12), // March 12, 2025
        shippingFee: 9.50,
        note: "Leave package behind the gate.",
        paymentCode: "BT88888",
        shippingAddress: "666 Wilshire Blvd, Los Angeles, CA 90048",
        shippingPhoneNumber: "213-555-8989",
        pointUsed: 160,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        customer: 19, // Steve Jobs
        worker: 9, // John Doe
        branch: 1, // Random branch
        status: 1, // Pending
        paymentMethod: 5, // Cash on Delivery
        quantity: 1,
        subtotal: 110.00,
        promotionCode: null,
        discountValue: 0,
        amount: 110.00,
        deliveryAt: new Date(2025, 2, 25), // March 25, 2025
        shippingFee: 6.50,
        note: "Confirm availability before delivery.",
        paymentCode: null,
        shippingAddress: "777 S Figueroa St, Los Angeles, CA 90017",
        shippingPhoneNumber: "213-555-9090",
        pointUsed: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        customer: 20, // Tina Fey
        worker: 2, // John Doe
        branch: 9, // Random branch
        status: 2, // Processing
        paymentMethod: 6, // Mobile Payment
        quantity: 5,
        subtotal: 475.00,
        promotionCode: "SPRING20",
        discountValue: 20,
        amount: 455.00,
        deliveryAt: new Date(2025, 2, 23), // March 23, 2025
        shippingFee: 14.50,
        note: "Deliver to reception desk.",
        paymentCode: "MP55555",
        shippingAddress: "888 S Grand Ave, Los Angeles, CA 90017",
        shippingPhoneNumber: "213-555-0101",
        pointUsed: 240,
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

