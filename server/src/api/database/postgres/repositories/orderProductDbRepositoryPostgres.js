// Import model
const { Order_Product } = require('../models');

const orderProductDbReposityroPostgres = () => {
  const add = (id) => {
    return Product_Image.findByPk(id);
  };

  return {
    add,
  };
};

module.exports = orderProductDbReposityroPostgres;
