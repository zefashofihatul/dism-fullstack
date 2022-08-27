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
      idUser: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
      },
      fullname: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          isOnlyNumber(value) {
            if (/^[0-9 ]+$/.test(value)) {
              throw new Error(
                'Short Description Validation: Character length must contain string'
              );
            }
          },
        },
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      dateOfBirth: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      newslater: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        validate: {
          isBoolean: {
            msg: 'Profile Newslater Validation: Field must Boolean',
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'User_Detail',
    }
  );
  return User_Detail;
};
