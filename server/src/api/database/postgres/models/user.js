'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Order, {
        foreignKey: 'idUser',
        as: 'order',
      });

      User.hasMany(models.Cart, {
        foreignKey: 'idUser',
        as: 'cart',
      });
    }
  }
  User.init(
    {
      fullName: DataTypes.STRING,
      gender: DataTypes.STRING,
      email: DataTypes.STRING,
      dateOfBirth: DataTypes.DATE,
      newslater: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
