const updatePaymentMethod = (
  dbRepository,
  idPaymentMethod,
  dataPaymentMethod
) => {
  return dbRepository.updateMethod(idPaymentMethod, dataPaymentMethod);
};

module.exports = updatePaymentMethod;
