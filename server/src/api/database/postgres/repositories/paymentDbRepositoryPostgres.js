const { Payment } = require('../models');

const paymentDbRepositoryPostgres = () => {
  const addMethod = (dataMethod) => {
    return Payment.create(dataMethod);
  };
  const findAllMethod = () => {
    return Payment.findAll();
  };
  const findMethodByProperty = (property) => {
    return Payment.findAll({
      where: property,
    });
  };
  const updateMethod = (idPaymentMethod, property) => {
    return Payment.update(property, {
      where: {
        id: idPaymentMethod,
      },
      returning: true,
    });
  };
  const findMethodById = (idPaymentMethod) => {
    return Payment.findByPk(idPaymentMethod);
  };
  return {
    addMethod,
    updateMethod,
    findAllMethod,
    findMethodByProperty,
    findMethodById,
  };
};

module.exports = paymentDbRepositoryPostgres;
