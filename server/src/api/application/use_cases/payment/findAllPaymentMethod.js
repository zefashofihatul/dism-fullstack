const findAllPaymentMethod = (dbRepository) => {
  return dbRepository.findAllMethod();
};

module.exports = findAllPaymentMethod;
