import { Request, Response } from 'express';

import { findCharacters } from "../../services/characters";
import { ApiResponse, errorCodes } from '../../util/shared';
import logger from '../../util/logger';

/**
 *
 * @name FindCharactersController
 * @param {Object} req - Request Object
 * @param {Object} res - Request Response
 * @description returns filter characters
 * @returns API Response
 */
const FindCharactersController = async (req: Request, res: Response) => {
    try {
        const { sorts, filters } = req.body;

        const characters = await findCharacters(
            {
                sorts: { gender: sorts?.gender, firstName: sorts?.firstName, lastName: sorts?.lastName },
                filters: { gender: filters?.gender, status: filters?.status, location: filters?.location }
            });
        res.send(ApiResponse({ code: 200, msg: errorCodes[200], data: characters }));
    } catch (error) {
        logger.error(error)
        res.send(ApiResponse({ code: 500, msg: errorCodes[500], errors: [error] }))
    }
}

export {
    FindCharactersController
};