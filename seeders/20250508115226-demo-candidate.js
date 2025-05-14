'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('candidates',[
      { name: 'Alice', email: 'alice@example.com', phno: '9876543210', gender: 'Female', createdAt: new Date(), updatedAt: new Date() },
  { name: 'Bob', email: 'bob@example.com', phno: '9876543211', gender: 'Male', createdAt: new Date(), updatedAt: new Date() },
  { name: 'Charlie', email: 'charlie@example.com', phno: '9876543212', gender: 'Male', createdAt: new Date(), updatedAt: new Date() },
  { name: 'David', email: 'david@example.com', phno: '9876543213', gender: 'Male', createdAt: new Date(), updatedAt: new Date() },
  { name: 'Eva', email: 'eva@example.com', phno: '9876543214', gender: 'Female', createdAt: new Date(), updatedAt: new Date() },
  { name: 'Frank', email: 'frank@example.com', phno: '9876543215', gender: 'Male', createdAt: new Date(), updatedAt: new Date() },
  { name: 'Grace', email: 'grace@example.com', phno: '9876543216', gender: 'Female', createdAt: new Date(), updatedAt: new Date() },
  { name: 'Helen', email: 'helen@example.com', phno: '9876543217', gender: 'Female', createdAt: new Date(), updatedAt: new Date() },
  { name: 'Ivan', email: 'ivan@example.com', phno: '9876543218', gender: 'Male', createdAt: new Date(), updatedAt: new Date() },
  { name: 'Judy', email: 'judy@example.com', phno: '9876543219', gender: 'Female', createdAt: new Date(), updatedAt: new Date() },
  { name: 'Kevin', email: 'kevin@example.com', phno: '9876543220', gender: 'Male', createdAt: new Date(), updatedAt: new Date() },
  { name: 'Laura', email: 'laura@example.com', phno: '9876543221', gender: 'Female', createdAt: new Date(), updatedAt: new Date() },
  { name: 'Mike', email: 'mike@example.com', phno: '9876543222', gender: 'Male', createdAt: new Date(), updatedAt: new Date() },
  { name: 'Nina', email: 'nina@example.com', phno: '9876543223', gender: 'Female', createdAt: new Date(), updatedAt: new Date() },
  { name: 'Oscar', email: 'oscar@example.com', phno: '9876543224', gender: 'Male', createdAt: new Date(), updatedAt: new Date() }

   ],{});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('candidates',null, {});
  }
};
