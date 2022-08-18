// Use-Case
const findAll = require('../../application/use_cases/products/findAll');
const addProduct = require('../../application/use_cases/products/addProduct');
const deleteById = require('../../application/use_cases/products/deleteById');

// Error Class
const NotFoundError = require('../../middlewares/exceptions/NotFoundError');
const InvariantError = require('../../middlewares/exceptions/InvariantError');

// Dependency
const { v4: uuidv4 } = require('uuid');

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
    const id = `${uuidv4()}-${req.body.name.split(' ').join('-')}`;
    const data = req.body;
    addProduct({
      id: id,
      ...data,
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime(),
      productRepository: dbRepository,
    }).then((data) => {
      const dataReturn = data.dataValues;
      console.log(dataReturn);
      // {id: id, name: productName, createdAt, updatedAt}
    });
    // deleteById(dbRepository, dataReturn.id).then((data) => {
    //   console.log(data);
    // });
  };

  return { fetchAllProducts, addNewProduct };
};

module.exports = productController;
