// Use-Case
const findAll = require('../../application/use_cases/products/findAll');
const addProduct = require('../../application/use_cases/products/addProduct');
const deleteById = require('../../application/use_cases/products/deleteById');
const findById = require('../../application/use_cases/products/findById');
const updateById = require('../../application/use_cases/products/updateById');

// Error Class
const NotFoundError = require('../../middlewares/exceptions/NotFoundError');
const InvariantError = require('../../middlewares/exceptions/InvariantError');

// Dependency
const { v4: uuidv4 } = require('uuid');

const productController = (productsDbRepositoryPostgres) => {
  // Repository Database Postgres Dependency
  const dbRepository = productsDbRepositoryPostgres();

  // Getting All Product on Database
  const fetchAllProducts = (req, res, next) => {
    findAll(dbRepository)
      .then((products) => {
        return res.status(200).send({
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
  const addNewProduct = (req, res, next) => {
    const id = `${uuidv4()}-${req.body.name.split(' ').join('-')}`;
    const data = req.body;
    addProduct({
      id: id,
      ...data,
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime(),
      productRepository: dbRepository,
    })
      .then((data) => {
        const dataReturn = data.dataValues;

        return res.status(200).send({
          status: 'Success',
          message: `${dataReturn.name} has been created`,
          data: dataReturn,
        });
      })
      .catch((error) => {
        next(error);
      });
  };

  // Delete Product from Database
  const deleteProductById = (req, res, next) => {
    deleteById(dbRepository, req.params.productId)
      .then((result) => {
        console.log(result);
        if (!result) {
          throw new InvariantError(
            `No product found with id: ${req.params.productId}`
          );
        }
        return res.status(200).send({
          status: 'Success',
          message: `Product with id : ${req.params.productId} has been deleted`,
        });
      })
      .catch((error) => next(error));
  };

  // Fetch Product by Id from Database
  const fetchProductById = (req, res, next) => {
    findById({ dbRepository, id: req.params.productId })
      .then((product) => {
        if (!product.length) {
          throw new InvariantError(
            `No product found with id: ${req.params.productId}`
          );
        }
        return res.status(200).send({
          status: 'Success',
          data: product,
        });
      })
      .catch((error) => {
        next(error);
      });
  };

  // Update Product by Id from Database
  const updateProductById = (req, res, next) => {
    updateById({
      dbRepository,
      id: req.params.productId,
      dataUpdate: {
        ...req.body,
        updatedAt: new Date().getTime(),
      },
    })
      .then((result) => {
        if (!result[0]) {
          throw new InvariantError(
            `No product found with id: ${req.params.productId}`
          );
        }
        return res.status(200).send({
          status: 'Success',
          message: `${req.body.name} has been updated`,
          data: result[1][0].dataValues,
        });
      })
      .catch((error) => {
        next(error);
      });
  };

  return {
    fetchAllProducts,
    addNewProduct,
    deleteProductById,
    fetchProductById,
    updateProductById,
  };
};

module.exports = productController;
