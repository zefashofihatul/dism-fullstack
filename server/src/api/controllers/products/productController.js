// Use-Case
const findAll = require('../../application/use_cases/products/findAll');
const addProduct = require('../../application/use_cases/products/addProduct');
const addProductWithImage = require('../../application/use_cases/products/addProductWithImage');
const deleteById = require('../../application/use_cases/products/deleteById');
const findById = require('../../application/use_cases/products/findById');
const updateById = require('../../application/use_cases/products/updateById');

// Importing Error Class
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
              category: product.category,
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
    const idProduct = `${uuidv4()}-${req.body.name.split(' ').join('-')}`;
    const data = req.body;
    console.log(data);
    addProduct({
      id: idProduct,
      name: data.name,
      shortDescription: data.shortDescription,
      price: data.price,
      materials: data.materials,
      dimensions: data.dimensions,
      details: data.details,
      category: data.category,
      color: data.color,
      dbRepository,
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

  // Adding New Product Images on Database
  const addNewProductWithImages = (req, res, next) => {
    const idProduct = `${uuidv4()}-${req.body.name.split(' ').join('-')}`;
    const idImages = `${uuidv4()}-${req.body.images.split(' ').join('-')}`;
    const data = req.body;
    console.log(data.images);

    addProductWithImage({
      id: idProduct,
      name: data.name,
      shortDescription: data.shortDescription,
      price: data.price,
      materials: data.materials,
      dimensions: data.dimensions,
      details: data.details,
      category: data.category,
      color: data.color,
      createdAt: new Date(),
      updatedAt: new Date(),
      // Catatan nama harus sama dengan alias apabila input with associate
      productImage: [
        {
          id: idImages,
          idProduct,
          name: data.images,
          src: `images/${data.images}`,
        },
        {
          id: `${idImages}-1`,
          idProduct,
          name: `${data.images}`,
          src: `images/${data.images}-1`,
        },
      ],
      dbRepository,
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
        if (!product) {
          throw new InvariantError(
            `No product found with id: ${req.params.productId}`
          );
        }
        return res.status(200).send({
          status: 'Success',
          data: product.dataValues,
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
    addNewProductWithImages,
    addNewProduct,
    deleteProductById,
    fetchProductById,
    updateProductById,
  };
};

module.exports = productController;
