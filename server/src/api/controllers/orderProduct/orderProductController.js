const orderProductController = (orderProductDbRepositoryPostgres) => {
  const dbRepository = orderProductDbRepositoryPostgres();

  const addNewOrderProduct = (req, res, next) => {};

  return {
    addNewOrderProduct,
  };
};

module.exports = orderProductController;
