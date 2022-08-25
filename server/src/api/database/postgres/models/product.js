'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.hasMany(models.Order_Product, {
        foreignKey: 'idProduct',
        as: 'orderProduct',
      });
      Product.hasMany(models.Product_Image, {
        foreignKey: 'idProduct',
        as: 'productImage',
      });
      Product.hasMany(models.Cart, {
        foreignKey: 'idProduct',
        as: 'cart',
      });
    }
  }
  Product.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: {
            msg: "Product Name Validation: Field can't be empty",
          },
          isAlpha: {
            msg: 'Product Name Validation: Field must containing String',
          },
          len: {
            args: [5, 255],
            msg: 'Product Name Validation: Character length must be on 5 to 100',
          },
        },
      },
      shortDescription: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isAlpha: {
            msg: 'Short Description Validation: Field must containing String',
          },
          len: {
            args: [3, 1234],
            msg: 'Short Description Validation: Character length must be on 5 to 1234',
          },
        },
      },
      price: {
        type: DataTypes.NUMBER,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: {
            msg: "Price Validation: Field can't be empty",
          },
          isInt: {
            msg: 'Price Validation: Field must be ',
          },
        },
      },
      materials: DataTypes.STRING,
      dimensions: DataTypes.STRING,
      details: DataTypes.STRING,
      category: DataTypes.STRING,
      color: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Product',
    }
  );
  return Product;
};
