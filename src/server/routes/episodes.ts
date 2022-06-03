import express from 'express';

import { GetEpisodesController } from '../controllers/episode';

const Router = express.Router()


/**
 *
 * @description handles all GET requests for /episodes
 *
 */
Router.get('/',
    GetEpisodesController
)



export default Router;