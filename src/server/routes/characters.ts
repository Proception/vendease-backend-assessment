import express from 'express';

import { FindCharactersController } from '../controllers/characters';
import { SearchCharacterEpisodesController } from "../controllers/episode";

const Router = express.Router()

/**
 *
 * @description handles all GET requests for /episodes
 *
 */
Router.get('/filter',
    // [
    // body('startDate').exists().isDate(),
    // body('endDate').exists().isDate(),
    // body('minCount').exists().isNumeric().custom(countValidator),
    // body('maxCount').exists().isNumeric().custom(countValidator),
    // ],
    // payloadValidator,
    FindCharactersController
)

/**
 *
 * @description handles all GET requests for /character/episodes
 *
 */
Router.get('/episodes',
    // [
    // body('startDate').exists().isDate(),
    // body('endDate').exists().isDate(),
    // body('minCount').exists().isNumeric().custom(countValidator),
    // body('maxCount').exists().isNumeric().custom(countValidator),
    // ],
    // payloadValidator,
    SearchCharacterEpisodesController
)

export default Router;