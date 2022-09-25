const findProductByProperty = ({ dbRepository, searchParam, page, limit }) => {
  return dbRepository.searchProductByName(searchParam, limit, page);
};

module.exports = findProductByProperty;
