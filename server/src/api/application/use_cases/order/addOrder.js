const InvariantError = require('../../../middlewares/exceptions/InvariantError');
const PaymentRequiredError = require('../../../middlewares/exceptions/PaymentRequiredError');

const addOrder = (dbRepository, dataOrder) => {
  if (
    !dataOrder.firstName ||
    !dataOrder.lastName ||
    !dataOrder.idPayment ||
    !dataOrder.email ||
    !dataOrder.phone ||
    !dataOrder.address
  ) {
    throw new InvariantError(
      'First name, Last name, email, phone & address are required'
    );
  }

  return dbRepository
    .findByProperty({
      idUser: dataOrder.idUser,
    })
    .then((result) => {
      if (result.length) {
        throw new PaymentRequiredError(
          'Order has been create. Payment required'
        );
      }
      return dbRepository.add(dataOrder);
    })
    .then((result) => {
      return dbRepository.findByIdWithNested(result.id);
    });
};

module.exports = addOrder;
