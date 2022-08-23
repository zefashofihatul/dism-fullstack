// Import Products Model
const { Cart, Products } = require('../models');

const productsDbRepositoryPostgres = () => {
  const findAllCarts = () => {
    return Cart.findAll();
  };

  const findByProperty = (property) => {
    return Cart.findAll({
      where: property,
    });
  };

  const findById = (id) => {
    return Cart.findByPk(id);
  };

  const add = (dataCart) => {
    return Cart.create(dataCart);
  };

  const addBulk = (dataCarts) => {
    return Cart.create(dataCarts);
  };

  const updateItem = (dataCart, idCart) => {
    return Cart.update(dataCart, {
      where: { id: idCart },
    });
  };

  const deleteCart = (idCart) => {
    return Cart.destroy({
      where: {
        id: idCart,
      },
    });
  };

  return {
    add,
    addBulk,
    findById,
    findByProperty,
    findAllCarts,
    updateItem,
    deleteCart,
  };
};

module.exports = productsDbRepositoryPostgres;
