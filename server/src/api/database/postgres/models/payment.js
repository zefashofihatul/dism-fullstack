'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Payment.hasMany(models.Order, {
        foreignKey: 'idPayment',
        as: 'order',
      });
    }
  }
  Payment.init(
    {
      paymentVendor: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isAlphanumeric: {
            msg: 'Payment Vendor Validation: Field must be String',
          },
        },
      },
      paymentMethod: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isAlphanumeric: {
            msg: 'Payment Method Validation: Field must be String',
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'Payment',
    }
  );
  return Payment;
};
