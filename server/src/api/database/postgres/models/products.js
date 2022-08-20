const { Model } = require('sequelize');
const InvariantError = require('../../../middlewares/exceptions/InvariantError');

module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of aSequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Products.hasMany(models.Carts, {
        foreignKey: 'idProduct',
        as: 'carts',
      });
    }
  }
  Products.init(
    {
      name: {
        type: DataTypes.STRING,
        unique: true,
      },
      shortDescription: DataTypes.STRING(1234),
      price: DataTypes.INTEGER,
      color: DataTypes.STRING,
      dimensions: DataTypes.STRING,
      details: DataTypes.STRING(1234),
      materials: DataTypes.STRING,
      thumb: DataTypes.STRING,
      category: DataTypes.STRING,
      images: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Products',
    }
  );
  return Products;
};
