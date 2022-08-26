const addPaymentMethod = require('../../application/use_cases/payment/addPaymentMethod');
const findAllPaymentMethod = require('../../application/use_cases/payment/findAllPaymentMethod');
const updatePaymentMethod = require('../../application/use_cases/payment/updatePaymentMethod');
const deletePaymentMethod = require('../../application/use_cases/payment/deletePaymentMethod');

// Dependency
const { v4: uuidv4 } = require('uuid');
const InvariantError = require('../../middlewares/exceptions/InvariantError');
const NotFoundError = require('../../middlewares/exceptions/NotFoundError');

const paymentController = (paymentDbRepositoryPostgres) => {
  const dbRepository = paymentDbRepositoryPostgres();

  const addNewPaymentMethod = (req, res, next) => {
    const { paymentVendor, paymentMethod } = req.body;
    addPaymentMethod(dbRepository, {
      paymentVendor,
      paymentMethod,
    })
      .then((result) => {
        if (!result) {
          throw new InvariantError('Fail to add payment method');
        }
        const { paymentVendor, paymentMethod } = result.dataValues;
        res.status(201).send({
          status: 'Success',
          message: `Adding Payment Method ${paymentVendor} Success`,
          data: result,
        });
      })
      .catch((err) => next(err));
  };

  const updatePaymentMethodById = (req, res, next) => {
    const { idPaymentMethod } = req.params;
    const { paymentVendor, paymentMethod } = req.body;
    updatePaymentMethod(dbRepository, idPaymentMethod, {
      paymentMethod,
      paymentVendor,
    })
      .then((result) => {
        if (!result[0]) {
          throw new InvariantError(
            `Fail to update payment method with id: ${idPaymentMethod}`
          );
        }
        res.status(200).send({
          status: 'Success',
          message: `Succes to update payment method with id: ${idPaymentMethod}`,
          data: result[1][0],
        });
      })
      .catch((err) => {
        console.log(err.message);
        next(err);
      });
  };

  const fetchAllPaymentMethod = (req, res, next) => {
    findAllPaymentMethod(dbRepository)
      .then((result) => {
        res.status(200).send({
          status: 'Success',
          data: result,
        });
      })
      .catch((err) => next(err));
  };

  const deletePaymentMethodById = (req, res, next) => {
    const { idPaymentMethod } = req.params;
    deletePaymentMethod(dbRepository, idPaymentMethod)
      .then((result) => {
        if (!result) {
          throw new NotFoundError(
            `No payment found with id: ${idPaymentMethod}`
          );
        }
        return res.status(200).send({
          status: 'Success',
          message: `Product with id: ${idPaymentMethod} has been deleted`,
        });
      })
      .catch((error) => next(error));
  };
  return {
    addNewPaymentMethod,
    fetchAllPaymentMethod,
    updatePaymentMethodById,
    deletePaymentMethodById,
  };
};

module.exports = paymentController;
