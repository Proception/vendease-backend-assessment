import { Request, Response } from 'express';

import {getEpisodes, searchCharacterEpisodes,} from "../../services/episodes";
import { ApiResponse, errorCodes } from '../../util/shared';

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
        const { characterId } = req.query
        const episodes = await getEpisodes();
        console.log({episodes})
        res.send(ApiResponse({ code: 0, msg: errorCodes[0], data: episodes }));
    } catch (error) {
        console.log(error)
        res.send(ApiResponse({ code: 2, msg: errorCodes[2], errors: [error] }))
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

        console.log({characterName})
        const episodes = await searchCharacterEpisodes(typeof characterName === "string" ? characterName : '');
        console.log({episodes})
        res.send(ApiResponse({ code: 0, msg: errorCodes[0], data: episodes }));
    } catch (error) {
        console.log(error)
        res.send(ApiResponse({ code: 2, msg: errorCodes[2], errors: [error] }))
    }
}

export {
    GetEpisodesController,
    SearchCharacterEpisodesController
};