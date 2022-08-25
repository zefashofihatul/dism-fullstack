const addOrder = require('../../application/use_cases/order/addOrder');
const findOrderById = require('../../application/use_cases/order/findOrderById');
const findAllOrder = require('../../application/use_cases/order/findAllOrder');

// Dependency
const { v4: uuidv4 } = require('uuid');
const InvariantError = require('../../middlewares/exceptions/InvariantError');

const orderController = (orderDbRepositoryPostgres) => {
  const dbRepository = orderDbRepositoryPostgres();

  const addNewOrder = (req, res, next) => {
    const { idPayment, firstName, lastName, phone, address, orderProducts } =
      req.body;
    const { email, id: idUser } = req.user;
    const idOrder = `order-${uuidv4()}`;
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
        res.status(200).send({
          status: 'Success',
          messages: `Adding new Order with idUser: ${idUser} success`,
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

  return {
    addNewOrder,
    fetchOrderById,
    fetchAllOrder,
  };
};

module.exports = orderController;