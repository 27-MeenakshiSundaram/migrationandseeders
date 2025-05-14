'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('candidates',{
      id:{
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
        type: Sequelize.INTEGER,
      },
      name:Sequelize.STRING,
      email:Sequelize.STRING,
      phno:Sequelize.STRING,
      gender:Sequelize.STRING,
      createdAt:Sequelize.DATE,
      updatedAt:Sequelize.DATE

    });
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.dropTable('candidates'); 
  }
};
