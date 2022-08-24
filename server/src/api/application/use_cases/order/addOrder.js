const addOrder = (dbRepository, dataOrder) => {
  //Add with proper validator
  return dbRepository
    .add(dataOrder)
    .then((value) => {
      return dbRepository.findByIdWithNested(value.id);
    })
    .then((value) => {
      return value;
    });
};

module.exports = addOrder;
