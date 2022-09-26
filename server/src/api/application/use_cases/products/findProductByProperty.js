const findProductByProperty = ({
  dbRepository,
  searchParam,
  page,
  limit,
  category = '',
}) => {
  return dbRepository.searchProductByName({
    searchParam,
    limit,
    page,
    category,
  });
};

module.exports = findProductByProperty;
