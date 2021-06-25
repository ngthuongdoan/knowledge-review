const express = require('express');
const cors = require('cors');
const httpStatus = require('http-status');
const helmet = require('helmet');
const xss = require('xss-clean');
const compression = require('compression');
const routes = require('./routes');
const ApiError = require('./utils/ApiError');
const { errorConverter, errorHandler } = require('./middlewares/error');
const morgan = require('./config/morgan');

const app = express();

app.use(helmet());

app.use(morgan.successHandler);
app.use(morgan.errorHandler);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(xss());
// gzip compression
app.use(compression());

app.use(cors());
app.options('*', cors());

app.use('/', routes);

app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

module.exports = app;
