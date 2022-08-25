const findAllProductPerPage = (dbRepository, { limit, page }) => {
  return dbRepository.findAllPerPage(limit, page);
};
module.exports = findAllProductPerPage;
