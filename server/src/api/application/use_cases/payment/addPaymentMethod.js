const addPaymentMethod = (dbRepository, dataPaymentMethod) => {
  return dbRepository.addMethod(dataPaymentMethod);
};
module.exports = addPaymentMethod;
