'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Carts', {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      idProduct: {
        allowNull: false,
        autoIncrement: false,
        references: {
          model: 'Products',
          key: 'id',
        },
        type: Sequelize.STRING,
      },
      idUser: {
        allowNull: false,
        autoIncrement: false,
        references: {
          model: 'Users',
          key: 'id',
        },
        type: Sequelize.STRING,
      },
      color: {
        type: Sequelize.STRING,
      },
      quantity: {
        type: Sequelize.INTEGER,
      },
      price: {
        type: Sequelize.INTEGER,
      },
      thumb: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('Carts');
  },
};
