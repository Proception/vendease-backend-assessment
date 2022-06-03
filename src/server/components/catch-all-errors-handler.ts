import {NextFunction, Request, Response} from "express";
import {ApiResponse, errorCodes} from "../../util/shared";

/**
 *
 * @name catchAll
 * @param {object} req
 * @param {object} res
 * @param {function} NextFunction
 * @description Catches route errors
 */
export const catchAll = (err: Error, req: Request,res: Response, next: NextFunction) => {
    res.status(500).send(ApiResponse({ code: 500, msg: errorCodes[500], errors: err }))
}
