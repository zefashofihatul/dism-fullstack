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
        allowNull: false,
        unique: true,
        references: {
          model: 'User',
          key: 'id',
        },
        validate: {
          notEmpty: {
            msg: "Product Name Validation: Field can't be empty",
          },
          len: {
            args: [5, 100],
            msg: 'Product Name Validation: Character length must be on 5 to 255',
          },
        },
      },
      idProduct: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        references: {
          model: 'Product',
          key: 'id',
        },
        validate: {
          notEmpty: {
            msg: "Product Name Validation: Field can't be empty",
          },
          len: {
            args: [5, 100],
            msg: 'Product Name Validation: Character length must be on 5 to 255',
          },
        },
      },
      color: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          isAlpha: {
            args: true,
            msg: 'Cart Color Validation: Field must just String',
          },
        },
      },
      quantity: {
        type: DataTypes.NUMBER,
        allowNull: false,
        validate: {
          isInt: {
            args: true,
            msg: 'Cart Quantity Validation: Field must just Number',
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'Cart',
    }
  );
  return Cart;
};
