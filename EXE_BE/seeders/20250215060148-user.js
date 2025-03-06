'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        memberRank: 1,
        fullName: "Alice Smith",
        password: "123",
        email: "alicesmith@gmail.com",
        status: true,
        dateOfBirth: "1990-12-09",
        note: "Alice is a good person, she always helps other people",
        isBan: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        memberRank: 2,
        fullName: "Bob Johnson",
        password: "123",
        email: "bobjohnson@gmail.com",
        status: true,
        dateOfBirth: "1985-03-15",
        note: "Bob is a hardworking manager.",
        isBan: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        memberRank: 3,
        fullName: "Charlie Brown",
        password: "123",
        email: "charliebrown@gmail.com",
        status: true,
        dateOfBirth: "1992-06-20",
        note: "Charlie is a friendly member.",
        isBan: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        memberRank: 4,
        fullName: "Diana Prince",
        password: "123",
        email: "dianaprince@gmail.com",
        status: true,
        dateOfBirth: "1988-09-25",
        note: "Diana is a highly skilled staff.",
        isBan: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        memberRank: 5,
        fullName: "Edward Elric",
        password: "123",
        email: "edwardelric@gmail.com",
        status: true,
        dateOfBirth: "1990-11-30",
        note: "Edward is a franchise owner.",
        isBan: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        memberRank: 6,
        fullName: "Fiona Gallagher",
        password: "123",
        email: "fionagallagher@gmail.com",
        status: true,
        dateOfBirth: "1995-10-05",
        note: "Fiona is a loyal customer.",
        isBan: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        memberRank: 7,
        fullName: "George Washington",
        password: "123",
        email: "georgewashington@gmail.com",
        status: true,
        dateOfBirth: "1980-07-10",
        note: "George is a reliable shipper.",
        isBan: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        memberRank: 8,
        fullName: "Hannah Montana",
        password: "123",
        email: "hannahmontana@gmail.com",
        status: true,
        dateOfBirth: "1994-08-15",
        note: "Hannah is an inspiring leader.",
        isBan: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        memberRank: 9,
        fullName: "Ian Malcolm",
        password: "123",
        email: "ianmalcolm@gmail.com",
        status: true,
        dateOfBirth: "1987-02-12",
        note: "Ian is a great problem solver.",
        isBan: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        memberRank: 10,
        fullName: "Jack Sparrow",
        password: "123",
        email: "jacksparrow@gmail.com",
        status: true,
        dateOfBirth: "1991-04-05",
        note: "Jack is adventurous and fun.",
        isBan: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        memberRank: 11,
        fullName: "Katherine Johnson",
        password: "123",
        email: "katherinejohnson@gmail.com",
        status: true,
        dateOfBirth: "1986-06-18",
        note: "Katherine is a brilliant mathematician.",
        isBan: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        memberRank: 12,
        fullName: "Liam Neeson",
        password: "123",
        email: "liamneeson@gmail.com",
        status: true,
        dateOfBirth: "1975-08-20",
        note: "Liam is a talented actor.",
        isBan: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        memberRank: 13,
        fullName: "Mia Wallace",
        password: "123",
        email: "miawallace@gmail.com",
        status: true,
        dateOfBirth: "1992-10-25",
        note: "Mia is a creative artist.",
        isBan: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        memberRank: 14,
        fullName: "Nina Simone",
        password: "123",
        email: "ninasimone@gmail.com",
        status: true,
        dateOfBirth: "1983-12-30",
        note: "Nina is a passionate musician.",
        isBan: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        memberRank: 15,
        fullName: "Oliver Twist",
        password: "123",
        email: "olivertwist@gmail.com",
        status: true,
        dateOfBirth: "1990-11-15",
        note: "Oliver is a brave young boy.",
        isBan: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        memberRank: 16,
        fullName: "Pamela Anderson",
        password: "123",
        email: "pamelaanderson@gmail.com",
        status: true,
        dateOfBirth: "1970-02-20",
        note: "Pamela is a famous actress.",
        isBan: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        memberRank: 17,
        fullName: "Quentin Tarantino",
        password: "123",
        email: "quentintarantino@gmail.com",
        status: true,
        dateOfBirth: "1963-03-27",
        note: "Quentin is a legendary director.",
        isBan: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        memberRank: 18,
        fullName: "Rachel Green",
        password: "123",
        email: "rachelgreen@gmail.com",
        status: true,
        dateOfBirth: "1994-04-10",
        note: "Rachel is a fashion icon.",
        isBan: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        memberRank: 19,
        fullName: "Steve Jobs",
        password: "123",
        email: "stevejobs@gmail.com",
        status: true,
        dateOfBirth: "1955-02-24",
        note: "Steve is a visionary entrepreneur.",
        isBan: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        memberRank: 20,
        fullName: "Tina Fey",
        password: "123",
        email: "tinafey@gmail.com",
        status: true,
        dateOfBirth: "1970-05-18",
        note: "Tina is a talented comedian.",
        isBan: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        memberRank: 21,
        fullName: "Uma Thurman",
        password: "123",
        email: "umathurman@gmail.com",
        status: true,
        dateOfBirth: "1970-07-20",
        note: "Uma is a skilled actress.",
        isBan: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Các hàng khác với memberRank hợp lệ
      {
        memberRank: 1,
        fullName: "batman",
        password: "bat123",
        email: "bruce@gmail.com",
        status: false,
        dateOfBirth: "1980-03-25",
        note: "Prefers working at night.",
        isBan: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        memberRank: 3,
        fullName: "superman",
        password: "krypton",
        email: "clark@gmail.com",
        status: true,
        dateOfBirth: "1978-06-18",
        note: "Flies faster than a speeding bullet.",
        isBan: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        memberRank: 4,
        fullName: "flash",
        password: "speedster",
        email: "barry@gmail.com",
        status: true,
        dateOfBirth: "1992-11-30",
        note: "Fastest man alive.",
        isBan: false,
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

