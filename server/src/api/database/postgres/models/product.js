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
      name: DataTypes.STRING,
      shortDescription: DataTypes.STRING,
      price: DataTypes.NUMBER,
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
