// Use-Case
const findAll = require('../../application/use_cases/products/findAll');
const addProduct = require('../../application/use_cases/products/addProduct');

// Error Class
const NotFoundError = require('../../middlewares/exceptions/NotFoundError');
const InvariantError = require('../../middlewares/exceptions/InvariantError');

const productController = (productsDbRepositoryPostgres) => {
  const dbRepository = productsDbRepositoryPostgres();

  // Geeting All Product on Database
  const fetchAllProducts = (req, res, next) => {
    findAll(dbRepository)
      .then((products) => {
        res.status(200);
        res.json({
          status: 'Success',
          data: products.map((product) => {
            return {
              id: product.id,
              name: product.name,
              price: product.price,
              color: product.color,
              thumb: product.thumb,
              category: product.category,
              images: product.images,
              createdAt: product.createdAt,
              updatedAt: product.updatedAt,
            };
          }),
        });
      })
      .catch((error) => {
        next(error);
      });
  };

  // Adding New Product on Database
  const addNewProduct = (req, res, nex) => {
    const id = req.body.name.split(' ').join('-');
    const data = req.body;
    // TODO : Next Start Disini Kocak
    // addNewProduct({
    //   id: ,
    //   ...data
    // });
    console.log(req.body);
  };

  return { fetchAllProducts, addNewProduct };
};

module.exports = productController;
