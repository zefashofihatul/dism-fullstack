const findProductsByCategory = ({ dbRepository, filterParam, page, limit }) => {
  return dbRepository.filterProductsByCategory(filterParam, limit, page);
};

module.exports = findProductsByCategory;
