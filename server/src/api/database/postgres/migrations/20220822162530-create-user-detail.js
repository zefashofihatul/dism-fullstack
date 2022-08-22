'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('User_Details', {
      id: {
        allowNull: true,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      idUser: {
        type: Sequelize.STRING,
        allowNull: true,
        foreignKey: true,
      },
      fullname: {
        type: Sequelize.STRING,
      },
      gender: {
        type: Sequelize.STRING,
      },
      dateOfBirth: {
        type: Sequelize.DATE,
      },
      newslater: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('User_Details');
  },
};
