'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User_Detail.belongsTo(models.User, {
        foreignKey: 'idUser',
        as: 'user',
      });
    }
  }
  User_Detail.init(
    {
      idUser: DataTypes.STRING,
      fullname: DataTypes.STRING,
      gender: DataTypes.STRING,
      dateOfBirth: DataTypes.DATE,
      newslater: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'User_Detail',
    }
  );
  return User_Detail;
};
