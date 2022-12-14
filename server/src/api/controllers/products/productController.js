// Use-Case
const findAll = require('../../application/use_cases/products/findAll');
const addProduct = require('../../application/use_cases/products/addProduct');
const addProductWithImage = require('../../application/use_cases/products/addProductWithImage');
const deleteById = require('../../application/use_cases/products/deleteById');
const findById = require('../../application/use_cases/products/findById');
const updateById = require('../../application/use_cases/products/updateById');
const findAllProductPerPage = require('../../application/use_cases/products/findAllProductPerPage');
const findAllProductByProperty = require('../../application/use_cases/products/findProductByProperty');
const findProductsByCategory = require('../../application/use_cases/products/filterProductByCategory');

// Importing Error Class
const NotFoundError = require('../../middlewares/exceptions/NotFoundError');
const InvariantError = require('../../middlewares/exceptions/InvariantError');

// Importing Util
const tryParseInt = require('../../helpers/utils/parser');

// Dependency
const { v4: uuidv4 } = require('uuid');

const productController = (
  productsDbRepositoryPostgres,
  productImagesDbRepositoryPostgres
) => {
  // Repository Database Postgres Dependency
  const dbRepository = productsDbRepositoryPostgres();
  const dbRepositoryImage = productImagesDbRepositoryPostgres();

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

  const fetchProductByProperty = (req, res, next) => {
    console.log(req.query);
    const searchParam = req.query.name;
    const category = req.query.category;
    const page = tryParseInt(req.query.page, 0);
    const limit = tryParseInt(req.query.size, 10);
    console.log(searchParam);
    findAllProductByProperty({
      dbRepository,
      searchParam,
      page,
      limit,
      category,
    })
      .then((products) => {
        const { count, rows } = products;
        return res.status(200).send({
          status: 'Success',
          data: {
            size: limit,
            page: page,
            total: count,
            products: rows,
          },
        });
      })
      .catch((error) => {
        next(error);
      });
  };

  const fetchProductByCategory = (req, res, next) => {
    const page = tryParseInt(req.query.page, 0);
    const limit = tryParseInt(req.query.size, 10);
    const filterParam = req.params.filterParam;
    findProductsByCategory({ dbRepository, filterParam, page, limit })
      .then((result) => {
        const { count, rows } = result;
        return res.status(200).send({
          status: 'success',
          data: {
            size: limit,
            page: page,
            total: count,
            products: rows,
          },
        });
      })
      .catch((error) => {
        next(error);
      });
  };

  // Getting Product per Page
  const fetchAllProductsPerPage = (req, res, next) => {
    // Todo : How if page:1, limit:4. But count 2
    const page = tryParseInt(req.query.page, 0);
    const limit = tryParseInt(req.query.size, 10);
    findAllProductPerPage(dbRepository, { limit, page })
      .then((products) => {
        const { count, rows } = products;
        return res.status(200).send({
          status: 'Success',
          data: {
            size: limit,
            page: page,
            total: count,
            products: rows,
          },
        });
      })
      .catch((error) => {
        next(error);
      });
  };

  // Adding New Product on Database
  const addNewProduct = (req, res, next) => {
    const {
      name,
      shortDescription,
      price,
      materials,
      dimensions,
      details,
      category,
      color,
    } = req.body;

    addProduct({
      id: `product-${uuidv4()}`,
      name: name,
      shortDescription: shortDescription,
      price: price,
      materials: materials,
      dimensions: dimensions,
      details: details,
      category: category,
      color: color,
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
    const {
      name,
      description,
      price,
      materials,
      dimensions,
      details,
      category,
      stock,
      color,
      images,
    } = req.body;

    const idProduct = `product-${uuidv4()}`;
    addProductWithImage({
      id: idProduct,
      name: name,
      description: description,
      price: price,
      stock: stock,
      materials: materials,
      dimensions: dimensions,
      details: details,
      category: category,
      color: color,
      createdAt: new Date(),
      updatedAt: new Date(),
      productImage: req.files.map((value) => {
        return {
          id: `image-${uuidv4()}`,
          idProduct,
          name: value.filename,
          src: `http://localhost:8080/image/${value.filename}`,
        };
      }),
      dbRepository,
    })
      .then((data) => {
        const dataReturn = data.dataValues;

        return res.status(201).send({
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
    const { productId } = req.params;
    deleteById(dbRepository, productId)
      .then((result) => {
        console.log(result);
        if (!result) {
          throw new NotFoundError(`No product found with id: ${productId}`);
        }
        return res.status(200).send({
          status: 'Success',
          message: `Product with id : ${productId} has been deleted`,
        });
      })
      .catch((error) => next(error));
  };

  // Fetch Product by Id from Database
  const fetchProductById = (req, res, next) => {
    const { productId } = req.params;
    findById({ dbRepository, id: productId })
      .then((product) => {
        if (!product) {
          throw new InvariantError(`No product found with id: ${productId}`);
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
    const {
      name,
      price,
      stock,
      materials,
      details,
      description,
      dimensions,
      category,
    } = req.body;

    updateById(dbRepository, dbRepositoryImage, req.params.productId, {
      name,
      price,
      materials,
      details,
      description,
      dimensions,
      category,
      stock,
      updatedAt: new Date(),
      productImage: req.files.map((value) => {
        return {
          id: `image-${uuidv4()}`,
          idProduct: `${req.params.productId}`,
          name: value.filename,
          src: `http://localhost:8080/image/${value.filename}`,
        };
      }),
    })
      .then((result) => {
        console.log(result);
        if (!result.productResult) {
          throw new InvariantError(
            `No product found with id: ${req.params.productId}`
          );
        }
        return res.status(200).send({
          status: 'Success',
          message: `${req.body.name} has been updated`,
          data: result.productResult,
        });
      })
      .catch((error) => {
        next(error);
      });
  };

  return {
    fetchAllProducts,
    fetchProductByCategory,
    addNewProductWithImages,
    addNewProduct,
    deleteProductById,
    fetchProductById,
    fetchAllProductsPerPage,
    updateProductById,
    fetchProductByProperty,
  };
};

module.exports = productController;
