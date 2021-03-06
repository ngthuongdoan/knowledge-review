import httpStatus from 'http-status';
import mongoose from 'mongoose';
import logger from '../config/logger';
import ApiError from '../utils/ApiError';
import { Request, Response, NextFunction } from 'express';

const errorConverter = (
  err: ApiError | any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let error = err;
  if (!(error instanceof ApiError)) {
    const statusCode =
      error.statusCode || error instanceof mongoose.Error
        ? httpStatus.BAD_REQUEST
        : httpStatus.INTERNAL_SERVER_ERROR;
    const message = error.message || httpStatus[statusCode];
    error = new ApiError(statusCode, message, false, err.stack);
  }
  next(error);
};

// eslint-disable-next-line no-unused-vars
const errorHandler = (
  err: ApiError | any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { statusCode, message } = err;
  if (!err.isOperational) {
    statusCode = httpStatus.INTERNAL_SERVER_ERROR;
    message = httpStatus[httpStatus.INTERNAL_SERVER_ERROR];
  }

  res.locals.errorMessage = err.message;

  const response = {
    code: statusCode,
    message,
    ...{ stack: err.stack },
  };
  console.log(err);

  logger.error(err);
  res.status(statusCode).send(response);
};

export { errorConverter, errorHandler };
