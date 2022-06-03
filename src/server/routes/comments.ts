import express from 'express';
import { body } from 'express-validator';


import { payloadValidator } from '../../util/shared'
import { CreateCommentController, GetCommentsController } from '../controllers/comments';

const Router = express.Router()

/**
 *
 * @description handles all POST requests for /comments
 *
 */
Router.post('/',
    [
    body('comment').exists().isString().isLength({min: 4, max: 249}),
    body('episodeId').exists().isNumeric(),
    ],
    payloadValidator,
    CreateCommentController
)

Router.get('/:episodeId',
    GetCommentsController
)

export default Router;