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
        const { sort, filters } = req.body;
        const characters = await findCharacters({ sort, filters });
        res.send(ApiResponse({ code: 0, msg: errorCodes[0], data: characters }));
    } catch (error) {
        logger.error(error)
        res.send(ApiResponse({ code: 2, msg: errorCodes[2], errors: [error] }))
    }
}

export {
    FindCharactersController
};