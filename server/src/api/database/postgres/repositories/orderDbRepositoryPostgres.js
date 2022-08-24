// Import model
const { Order, Order_Product, Product } = require('../models');

const orderDbRepositoryPostgres = () => {
  const add = (dataOrder) => {
    return Order.create(dataOrder, {
      include: [
        {
          association: 'orderProducts',
        },
      ],
    });
  };

  const findAll = () => {
    return Order.findAll();
  };

  const findByProperty = (property) => {
    return Order.findAll({
      where: property,
    });
  };

  const findById = (idOrder) => {
    return Order.findByPk(idOrder);
  };

  const findByIdWithNested = (idUser) => {
    return Order.findByPk(idUser, {
      include: {
        association: 'orderProducts',
        include: 'product',
      },
    });
  };

  return {
    add,
    findAll,
    findById,
    findByProperty,
    findByIdWithNested,
  };
};

module.exports = orderDbRepositoryPostgres;
