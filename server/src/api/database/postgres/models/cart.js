'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cart.belongsTo(models.User, {
        foreignKey: 'idUser',
        as: 'user',
      });
      Cart.belongsTo(models.Product, {
        foreignKey: 'idProduct',
        as: 'product',
      });
    }
  }
  Cart.init(
    {
      idUser: {
        type: DataTypes.STRING,
        references: {
          model: 'User',
          key: 'id',
        },
      },
      idProduct: {
        type: DataTypes.STRING,
        unique: true,
        references: {
          model: 'Product',
          key: 'id',
        },
      },
      color: DataTypes.STRING,
      quantity: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: 'Cart',
    }
  );
  return Cart;
};
