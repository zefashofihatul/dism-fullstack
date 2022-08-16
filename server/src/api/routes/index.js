const productsRouter = require('./products.js');

module.exports = function routes(app, express) {
  app.use('/api/products', productsRouter(express));
  // app.use('/api/v1/users', userRouter(express));
  // app.use('/api/v1/login', authRouter(express));
};
