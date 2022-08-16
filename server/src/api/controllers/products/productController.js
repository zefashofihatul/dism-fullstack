// import findAll from '../../application/use_cases/products/';
const findAll = require('../../application/use_cases/products/findAll');
const NotFoundError = require('../../middlewares/exceptions/NotFoundError');

const productController = (productsDbRepositoryPostgres) => {
  const dbRepository = productsDbRepositoryPostgres();
  const fetchAllProducts = (req, res, next) => {
    const response = {};

    findAll(dbRepository)
      .then((products) => {
        response.product = products;
        throw new NotFoundError(`No post found`);
        // res.status(200);
        // res.json(response);
      })
      .catch((error) => {
        next(error);
      });
  };

  return { fetchAllProducts };
};

module.exports = productController;
