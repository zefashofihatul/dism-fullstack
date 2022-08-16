// import findAll from '../../application/use_cases/products/';

export default function productController(productsDbRepositoryPostgres) {
  const dbRepository = productsDbRepositoryPostgres();
  const fetchAllProducts = (req, res, next) => {
    dbRepository.findAllProducts();
    // findAll(req, dbRepository);
    res.send('fetchAllProducts');
  };

  return { fetchAllProducts };
}
