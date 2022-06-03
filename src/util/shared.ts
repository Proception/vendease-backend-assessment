import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

import { ResponseObject } from "../types/shared";

const errorCodes = {
  0: "Success",
  1: "Method Not Allowed",
  2: "Internal Server Error",
  3: "Requested Resource Not Available",
  4: "Validation Error",
  5: "Invalid Episode ID",
};

/**
 *
 * @name payloadValidator
 * @param {object} req
 * @param {object} res
 * @param {function} NextFunction
 * @description Validates payload parameters
 */
const payloadValidator = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json(
        ApiResponse({ code: 4, msg: errorCodes[4], errors: errors.array() })
      );
  }
  next();
};

/**
 *
 * @name ApiResponse
 * @param {number} code - predefined error codes
 * @param {string} msg - description of error or success messages
 * @param {array} records - An array of records
 * @param {array} errors - An array of erorrs if there was an error in the app
 *
 * @description Api response object
 * @returns APi response object
 */
const ApiResponse = ({ code, msg, data, errors }: ResponseObject) => {
  return {
    code,
    msg,
    data,
    errors,
  };
};

export { errorCodes, ApiResponse, payloadValidator };
