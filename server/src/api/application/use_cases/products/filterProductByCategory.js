const findProductsByCategory = ({ dbRepository, filterParam, page, limit }) => {
  console.log(filterParam);
  return dbRepository.filterProductsByCategory(filterParam, limit, page);
};

module.exports = findProductsByCategory;
