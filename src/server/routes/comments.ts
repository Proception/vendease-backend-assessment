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
    // [
    // body('startDate').exists().isDate(),
    // body('endDate').exists().isDate(),
    // body('minCount').exists().isNumeric().custom(countValidator),
    // body('maxCount').exists().isNumeric().custom(countValidator),
    // ],
    // payloadValidator,
    CreateCommentController
)

Router.get('/:episodeId',
    GetCommentsController
)

export default Router;