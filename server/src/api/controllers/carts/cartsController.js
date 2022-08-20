const findAll = require('../../../api/application/use_cases/carts/findAll');

const cartsController = (cartsDbRepositoryPostgres) => {
  const dbRepository = cartsDbRepositoryPostgres();

  // Getting all carts without including user
  const fetchAllCarts = (req, res, next) => {
    findAll(dbRepository)
      .then((data) => {
        return res.status(200).send(data);
      })
      .catch((err) => next(err));
  };

  return { fetchAllCarts };
};

module.exports = cartsController;
