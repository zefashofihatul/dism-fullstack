const { Payment } = require('../models');
const { Op } = require('sequelize');

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
  const findMethodByOperatorOr = (property) => {
    return Payment.findAll({
      where: {
        [Op.or]: property,
      },
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
  const deleteById = (idPaymentMethod) => {
    return Payment.destroy({
      where: { id: idPaymentMethod },
    });
  };
  return {
    addMethod,
    updateMethod,
    findAllMethod,
    findMethodByOperatorOr,
    findMethodByProperty,
    findMethodById,
    deleteById,
  };
};

module.exports = paymentDbRepositoryPostgres;
