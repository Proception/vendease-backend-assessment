import { Request, Response } from 'express';

import { createComment, getComments } from "../../services/comments";
import { ApiResponse, errorCodes } from '../../util/shared';
import logger from '../../util/logger'
import {replyFieldsFilter} from "../components/reply-fields-filter";

/**
 *
 * @name CreateCommentController
 * @param {Object} req - Request Object
 * @param {Object} res - Request Response
 * @description Creates a new comment for an episode
 * @returns API Response
 */
const CreateCommentController = async (req: Request, res: Response) => {
    const { episodeId, comment } = req.body
    let ipAddressLocation;
    if (req.headers['x-forwarded-for'] !== undefined && req.headers['x-forwarded-for']?.length > 0) {
        ipAddressLocation =  req.headers['x-forwarded-for'][0]
    } else {
        ipAddressLocation = req.socket.remoteAddress
    }

    try {
        const createdComment = await createComment({ episodeId, comment, ipAddressLocation })
        res.send(ApiResponse({ code: 200, msg: errorCodes[200], data: createdComment }));
    } catch (error) {
        logger.error(error)
        res.send(ApiResponse({ code: 500, msg: errorCodes[500], errors: [error] }))
    }
}

/**
 *
 * @name GetCommentsController
 * @param {Object} req - Request Object
 * @param {Object} res - Request Response
 * @description returns a list of comments by episode
 * @returns API Response
 */
const GetCommentsController = async (req: Request, res: Response) => {
    const { episodeId } = req.params
    const { $fields } = req.query
    try {
        const comments = await getComments(Number(episodeId));
        res.send(ApiResponse({
            code: 200,
            msg: errorCodes[200],
            data: replyFieldsFilter({response: comments, $fields })
        }));
    } catch (error) {
        logger.error(error)
        res.send(ApiResponse({ code: 500, msg: errorCodes[500], errors: [error] }))
    }
}

export {
    CreateCommentController,
    GetCommentsController
};