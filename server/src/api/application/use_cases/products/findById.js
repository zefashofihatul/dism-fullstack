const findById = ({ dbRepository, id }) => {
  return dbRepository.findProductById(id);
};
module.exports = findById;
