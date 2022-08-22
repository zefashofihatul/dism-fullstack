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

      User.hasMany(models.User_Detail, {
        foreignKey: 'idUser',
        as: 'userProduct',
      });

      User.belongsTo(models.Role, {
        foreignKey: 'idRole',
        as: 'role',
      });
    }
  }
  User.init(
    {
      idRole: {
        type: DataTypes.STRING,
      },
      username: {
        type: DataTypes.STRING,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
