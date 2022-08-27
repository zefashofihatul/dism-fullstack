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

      User.hasOne(models.User_Detail, {
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
        type: DataTypes.INTEGER,
        allowNull: false,
        validation: {
          notEmpty: {
            msg: "Username Validation: Field can't be empty",
          },
          notNull: {
            msg: 'Not null',
          },
        },
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: {
            msg: "Username Validation: Field can't be empty",
          },
          isAlpha: {
            msg: 'Username Validation: Field string only',
          },
          len: {
            args: [5, 25],
            msg: 'Username Validation:Character length must be on 4 to 25',
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          notEmpty: {
            msg: "Email Validation: Field can't be empty",
          },
          isEmail: {
            args: true,
            msg: 'Email Validation: Field must be contain valid user email',
          },
          len: {
            args: [5, 25],
            msg: 'Email Validation: Character length must be on 4 to 25',
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "Password Validation: Field can't be empty",
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
