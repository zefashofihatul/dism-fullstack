'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.hasMany(models.Order_Product, {
        foreignKey: 'idOrder',
        as: 'order',
      });

      Order.belongsTo(models.User, {
        foreignKey: 'idUser',
        as: 'user',
      });

      Order.belongsTo(models.Payment, {
        foreignKey: 'idPayment',
        as: 'payment',
      });
    }
  }
  Order.init(
    {
      idUser: {
        type: DataTypes.STRING,
        references: {
          model: 'User',
          key: 'id',
        },
      },
      idPayment: {
        type: DataTypes.STRING,
        references: {
          model: 'Payment',
          key: 'id',
        },
      },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.NUMBER,
      address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Order',
    }
  );
  return Order;
};
