import express from 'express';
import {check, query} from 'express-validator';


import { payloadValidator } from '../../util/shared'
import { FindCharactersController } from '../controllers/characters';
import { SearchCharacterEpisodesController } from "../controllers/episode";

const Router = express.Router()

/**
 *
 * @description handles all GET requests for /characters/filter
 *
 */
Router.post('/filter',
    [
        check('filters.gender').isString().isIn(['MALE', 'FEMALE']).optional({ nullable: true }),
        check('filters.status').isString().isIn(['ACTIVE', 'DEAD', 'UNKNOWN']).optional({ nullable: true }),
        check('filters.location').isString().optional({ nullable: true }),
        check('sorts.firstName').isString().isIn(['ASC', 'DESC']).optional({ nullable: true }),
        check('sorts.lastName').isString().isIn(['ASC', 'DESC']).optional({ nullable: true }),
        check('sorts.gender').isString().isIn(['ASC', 'DESC']).optional({ nullable: true }),
    ],
    payloadValidator,
    FindCharactersController
)

/**
 *
 * @description handles all GET requests for /characters/episodes
 *
 */
Router.get('/episodes',
    [
        query('characterName').exists().isString().isLength({ min: 3 }),
    ],
    payloadValidator,
    SearchCharacterEpisodesController
)

export default Router;