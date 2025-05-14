'use strict';
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
  },
  async down (queryInterface, Sequelize) {
      await queryInterface.dropTable('candidates'); 
  }
};
