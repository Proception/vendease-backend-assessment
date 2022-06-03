import express from 'express';

import comments from "./comments";
import episodes from "./episodes";
import characters from "./characters";

const router = express.Router();

router.use('/api/v1/comments', comments);
router.use('/api/v1/episodes', episodes);
router.use('/api/v1/characters', characters);

export default router;