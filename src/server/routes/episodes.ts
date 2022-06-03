import express from 'express';

import { GetEpisodesController } from '../controllers/episode';

const Router = express.Router()


/**
 *
 * @description handles all GET requests for /episodes
 *
 */
Router.get('/:characterId',
    // [
    // body('startDate').exists().isDate(),
    // body('endDate').exists().isDate(),
    // body('minCount').exists().isNumeric().custom(countValidator),
    // body('maxCount').exists().isNumeric().custom(countValidator),
    // ],
    // payloadValidator,
    GetEpisodesController
)



export default Router;