const findAll = require('../../../api/application/use_cases/carts/findAll');
const addCarts = require('../../../api/application/use_cases/carts/addCarts');
const addCart = require('../../application/use_cases/carts/addCart');
const updateCart = require('../../application/use_cases/carts/updateCart');
const deleteCartById = require('../../application/use_cases/carts/deleteCartById');
const findCartById = require('../../application/use_cases/carts/findCartById');
const findAllByUserId = require('../../application/use_cases/carts/findAllByUserId');

const InvariantError = require('../../middlewares/exceptions/InvariantError');
const NotFoundError = require('../../middlewares/exceptions/NotFoundError');

// Dependency
const { v4: uuidv4 } = require('uuid');

const cartsController = (cartsDbRepositoryPostgres) => {
  const dbRepository = cartsDbRepositoryPostgres();

  // Getting all carts without including user
  const fetchAllCarts = (req, res, next) => {
    findAll(dbRepository)
      .then((data) => {
        return res.status(200).send({
          status: 'Success',
          data: data,
        });
      })
      .catch((err) => next(err));
  };

  // Getting all carts without including user
  const fetchAllCartsByUserId = (req, res, next) => {
    const { id, username, email } = req.user;
    findAllByUserId(dbRepository, { idUser: id })
      .then((data) => {
        return res.status(200).send({
          status: 'Success',
          data: data,
        });
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
          data: {
            id: result.dataValues.id,
            idUser: result.dataValues.idUser,
            idProduct: result.dataValues.idProduct,
            color: result.dataValues.color,
            quantity: result.dataValues.quantity,
            createdAt: result.dataValues.createdAt,
            updatedAt: result.dataValues.updatedAt,
          },
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
          throw new NotFoundError('Delete cart fail');
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
    fetchAllCartsByUserId,
    addNewCarts,
    updateCartItem,
    deleteCart,
  };
};

module.exports = cartsController;
