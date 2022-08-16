const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');
const routes = require('./api/routes');

// Middlewares
const errorHandlerMiddleware = require('./api/middlewares/errorHandlerMiddleware');

const app = express();

const corsOptions = {
  origin: 'https://localhost:8081',
};

app.use(logger('dev'));
app.use(express.json());
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));

// Products Routes
routes(app, express);

// Cart Routes
// app.use('api/cart', cartRoutes);

// checkout Routes
// app.use('api/checkout', checkoutRoutes);

// error handling middleware
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});

module.exports = app;
