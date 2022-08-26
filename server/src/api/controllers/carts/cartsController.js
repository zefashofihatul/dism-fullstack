const findAll = require('../../../api/application/use_cases/carts/findAll');
const addCarts = require('../../../api/application/use_cases/carts/addCarts');
const addCart = require('../../application/use_cases/carts/addCart');
const updateCart = require('../../application/use_cases/carts/updateCart');
const deleteCartById = require('../../application/use_cases/carts/deleteCartById');
const findCartById = require('../../application/use_cases/carts/findCartById');

const InvariantError = require('../../middlewares/exceptions/InvariantError');

// Dependency
const { v4: uuidv4 } = require('uuid');

const cartsController = (cartsDbRepositoryPostgres) => {
  const dbRepository = cartsDbRepositoryPostgres();

  // Getting all carts without including user
  const fetchAllCarts = (req, res, next) => {
    findAll(dbRepository)
      .then((data) => {
        return res.status(200).send(data);
      })
      .catch((err) => next(err));
  };

  const fetchCartsById = (req, res, next) => {
    const { idCart } = req.params;
    findCartById(dbRepository, idCart)
      .then((result) => {
        if (!result) {
          throw new InvariantError(`Cart with ${idCart} not found`);
        }
        return res.status(200).send({
          status: 'Success',
          data: result.dataValues,
        });
      })
      .catch((err) => next(err));
  };

  const addNewCarts = (req, res, next) => {
    const { idProduct, color, quantity } = req.body;

    addCart(dbRepository, {
      id: uuidv4(),
      idProduct,
      idUser: req.user.id,
      color,
      quantity,
    })
      .then((result) => {
        return res.status(201).send({
          status: 'Success',
          message: `${result.dataValues.idProduct} has been created`,
          data: result.dataValues,
        });
      })
      .catch((error) => next(error));
  };

  const updateCartItem = (req, res, next) => {
    const { idCart } = req.params;
    const { color, quantity } = req.body;
    updateCart(dbRepository, idCart, {
      color,
      quantity,
    })
      .then((result) => {
        console.log(result);
        if (!result) {
          throw new InvariantError('Update cart fail');
        }
        res.status(200).send({
          status: 'Success',
          message: `Update with id: ${idCart} Success`,
        });
      })
      .catch((err) => next(err));
  };

  const deleteCart = (req, res, next) => {
    const { idCart } = req.params;
    deleteCartById(dbRepository, idCart)
      .then((result) => {
        if (!result) {
          throw new InvariantError('DELETE cart fail');
        }
        res.status(200).send({
          status: 'Success',
          message: `Delete Cart with id: ${idCart} Success`,
        });
      })
      .catch((err) => next(err));
  };

  return {
    fetchCartsById,
    fetchAllCarts,
    addNewCarts,
    updateCartItem,
    deleteCart,
  };
};

module.exports = cartsController;
