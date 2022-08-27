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
      include: {
        association: 'orderProducts',
        include: 'product',
      },
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

  const updateById = (idOrder, dataUpdate) => {
    return Order.update(dataUpdate, {
      where: {
        id: idOrder,
      },
      returning: true,
    });
  };

  return {
    add,
    findAll,
    findById,
    findByProperty,
    findByIdWithNested,
    updateById,
  };
};

module.exports = orderDbRepositoryPostgres;
