const deletePaymentMethod = (dbRepository, idPaymentMethod) => {
  return dbRepository.deleteById(idPaymentMethod);
};

module.exports = deletePaymentMethod;
