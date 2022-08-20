'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users.hasMany(models.Carts, {
        foreignKey: 'idUser',
        as: 'carts',
      });
    }
  }
  Users.init(
    {
      fullName: DataTypes.STRING,
      emailAddress: DataTypes.STRING,
      dateOfBirth: DataTypes.DATE,
      gender: DataTypes.STRING,
      cityOfAddress: DataTypes.STRING,
      newslater: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Users',
    }
  );
  return Users;
};
