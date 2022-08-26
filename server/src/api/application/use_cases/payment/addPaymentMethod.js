const InvariantError = require('../../../middlewares/exceptions/InvariantError');
const { Op } = require('sequelize');

const addPaymentMethod = (dbRepository, dataPayment) => {
  if (!dataPayment.paymentVendor || !dataPayment.paymentMethod) {
    throw new InvariantError(
      'Field Payment vendor or Payment method cannot be empty'
    );
  }
  return dbRepository
    .findMethodByOperatorOr({
      [Op.and]: [
        { paymentVendor: dataPayment.paymentVendor },
        {
          [Op.and]: [
            { paymentMethod: dataPayment.paymentMethod },
            { paymentVendor: dataPayment.paymentVendor },
          ],
        },
      ],
    })
    .then((result) => {
      if (result.length) {
        throw new InvariantError('Data payment exist already');
      }
      return dbRepository.addMethod(dataPayment);
    });
};
module.exports = addPaymentMethod;
