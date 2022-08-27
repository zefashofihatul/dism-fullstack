const addOrder = require('../../application/use_cases/order/addOrder');
const findOrderById = require('../../application/use_cases/order/findOrderById');
const findAllOrder = require('../../application/use_cases/order/findAllOrder');
const findAllOrderByUserId = require('../../application/use_cases/order/findAllOrderByIdUser');
const updateOrderById = require('../../application/use_cases/order/updateOrderById');

// Dependency
const { v4: uuidv4 } = require('uuid');
const InvariantError = require('../../middlewares/exceptions/InvariantError');
const NotFoundError = require('../../middlewares/exceptions/NotFoundError');

const orderController = (orderDbRepositoryPostgres) => {
  const dbRepository = orderDbRepositoryPostgres();

  const addNewOrder = (req, res, next) => {
    const {
      idPayment,
      firstName,
      lastName,
      phone,
      address,
      orderProducts,
      email,
    } = req.body;
    const { id: idUser } = req.user;
    const idOrder = `order-${uuidv4()}`;
    if (!orderProducts) {
      throw new InvariantError('Order Products are Required');
    }
    addOrder(dbRepository, {
      id: idOrder,
      idUser,
      idPayment,
      firstName,
      lastName,
      email,
      phone,
      address,
      createdAt: new Date(),
      updatedAt: new Date(),
      orderProducts: orderProducts.map((value) => {
        return {
          id: `orderItems-${uuidv4()}`,
          idOrder,
          idProduct: value.idProduct,
          quantity: value.quantity,
          color: value.color,
          createdAt: new Date(),
          updatedAt: new Date(),
        };
      }),
    })
      .then((result) => {
        if (!result) {
          throw new InvariantError('Adding new Order Fail');
        }
        res.status(201).send({
          status: 'Success',
          message: `Adding new Order with idUser: ${idUser} success`,
          data: result,
        });
      })
      .catch((err) => next(err));
  };

  const fetchOrderById = (req, res, next) => {
    const { idOrder } = req.params;
    findOrderById(dbRepository, idOrder)
      .then((result) => {
        if (!result) {
          throw new InvariantError(`Order data with id: ${idOrder} not found`);
        }
        res.status(200).send({
          status: 'Success',
          data: result,
        });
      })
      .catch((err) => next(err));
  };

  const fetchAllOrder = (req, res, next) => {
    findAllOrder(dbRepository)
      .then((result) => {
        res.status(200).send({
          status: 'Success',
          data: result,
        });
      })
      .catch((err) => next(err));
  };

  const fetchAllOrderByIdUser = (req, res, next) => {
    const { id: idUser } = req.user;
    findAllOrderByUserId(dbRepository, idUser)
      .then((result) => {
        res.status(200).send({
          status: 'Success',
          data: result,
        });
      })
      .catch((err) => next(err));
  };

  const updateOrderByIdUser = (req, res, next) => {
    const { idOrder } = req.params;
    const { idPayment, firstName, lastName, email, phone, address } = req.body;
    updateOrderById(dbRepository, idOrder, {
      idPayment,
      firstName,
      lastName,
      email,
      phone,
      address,
    })
      .then((result) => {
        console.log(result);
        if (!result[0]) {
          throw new NotFoundError(`No product found with id: ${idOrder}`);
        }
        return res.status(200).send({
          status: 'Success',
          message: `${idOrder} has been updated`,
          data: result[1][0].dataValues,
        });
      })
      .catch((err) => next(err));
  };

  return {
    addNewOrder,
    fetchOrderById,
    fetchAllOrder,
    fetchAllOrderByIdUser,
    updateOrderByIdUser,
  };
};

module.exports = orderController;
