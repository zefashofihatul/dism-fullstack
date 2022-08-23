// Import model
const { Order } = require('../models');

const orderDbRepositoryPostgres = () => {
  const add = (id) => {
    return Order.findByPk(id);
  };

  return {
    add,
  };
};

module.exports = orderDbRepositoryPostgres;
