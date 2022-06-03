import { Request, Response } from 'express';

import {getEpisodes, searchCharacterEpisodes,} from "../../services/episodes";
import { ApiResponse, errorCodes } from '../../util/shared';
import logger from '../../util/logger'
import {replyFieldsFilter} from "../components/reply-fields-filter";

/**
 *
 * @name GetEpisodesController
 * @param {Object} req - Request Object
 * @param {Object} res - Request Response
 * @description returns episode by episodeId
 * @returns API Response
 */
const GetEpisodesController = async (req: Request, res: Response) => {
    try {
        const { characterId, $fields } = req.query;
        const episodes = await getEpisodes(Number(characterId));
        res.send(ApiResponse({ code: 200, msg: errorCodes[200], data: replyFieldsFilter({ response: episodes, $fields }) }));
    } catch (error) {
        logger.error(error)
        res.send(ApiResponse({ code: 500, msg: errorCodes[500], errors: [error] }))
    }
}


/**
 *
 * @name SearchCharacterEpisodesController
 * @param {Object} req - Request Object
 * @param {Object} res - Request Response
 * @description returns episode by a character was featured in
 * @returns API Response
 */
const SearchCharacterEpisodesController = async (req: Request, res: Response) => {
    try {
        const { characterName } = req.query

        const episodes = await searchCharacterEpisodes(typeof characterName === "string" ? characterName : '');
        res.send(ApiResponse({ code: 200, msg: errorCodes[200], data: episodes }));
    } catch (error) {
        logger.error(error)
        res.send(ApiResponse({ code: 500, msg: errorCodes[500], errors: [error] }))
    }
}

export {
    GetEpisodesController,
    SearchCharacterEpisodesController
};