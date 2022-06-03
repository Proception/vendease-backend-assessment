import {Request, Response} from "express";
import {ApiResponse, errorCodes} from "../../util/shared";

/**
 *
 * @name notFound
 * @param {object} req
 * @param {object} res
 * @param {function} NextFunction
 * @description handles Resource not found errors
 */
export const notFound = (req: Request,res: Response) => {
    res.status(404).send(ApiResponse({code: 3, msg: errorCodes[3]}))
}
