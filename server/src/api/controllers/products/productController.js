// import findAll from '../../application/use_cases/products/';

const productController = (productsDbRepositoryPostgres) => {
  const dbRepository = productsDbRepositoryPostgres();
  const fetchAllProducts = (req, res, next) => {
    dbRepository.findAllProducts();
    // findAll(req, dbRepository);
    res.send('fetchAllProducts');
  };

  return { fetchAllProducts };
};

module.exports = productController;
