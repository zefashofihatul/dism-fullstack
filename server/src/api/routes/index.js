const productsRouter = require('./products');
const cartsRouter = require('./carts');
const imagesRouter = require('./images');
const usersRouter = require('./users');
const authRouter = require('./auth');
const orderRouter = require('./order');

module.exports = function routes(app, express) {
  app.use('/api/products', productsRouter(express));
  app.use('/api/carts', cartsRouter(express));
  app.use('/api/image', imagesRouter(express));
  app.use('/api/users', usersRouter(express));
  app.use('/api/login', authRouter(express));
  app.use('/api/order', orderRouter(express));
  // app.use('/api/v1/users', userRouter(express));
  // app.use('/api/v1/login', authRouter(express));
};
