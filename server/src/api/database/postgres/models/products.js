const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of aSequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Products.init(
    {
      name: DataTypes.STRING,
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
