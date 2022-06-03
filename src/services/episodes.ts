import logger from "../util/logger";

const Sequelize = require("sequelize");

import {
  EpisodeModel,
  CommentModel,
  CharacterEpisodeModel,
  CharacterModel,
} from "../models";

const getAllEpisodes = async () => {
  const episodes = await EpisodeModel.findAll({
    order: [["releaseDate", "ASC"]],
    include: [
      {
        model: CommentModel,
      },
    ],
  });

  const episodesList = [];
  for (const episode of episodes) {
    const currentEpisode = episode.get({ plain: true });
    currentEpisode.commentCount = currentEpisode.Comments.length;
    episodesList.push(currentEpisode);
  }

  return episodesList;
}

const getEpisodeByCharacterId = async (characterId: number) => {
  const episodes = await CharacterEpisodeModel.findAll({
    where: {
      characterId
    },
    include: [
      {
        model: EpisodeModel,
        order: [["releaseDate", "ASC"]],
        include: [
          {
            model: CommentModel,
          },
        ]
      },
    ],
  });

  const episodesList = [];
  for (const episode of episodes) {
    const currentEpisode = episode.get({ plain: true });
    currentEpisode.Episode.commentCount = currentEpisode.Episode.Comments.length;
    episodesList.push(currentEpisode.Episode);
  }

  return episodesList;
}

const getEpisodes = async (characterId?:number) => {
  let episodes;

  if (characterId) {
    episodes = getEpisodeByCharacterId(characterId);
  }

  if (!characterId) {
    episodes = await getAllEpisodes();
  }

  return episodes;
};

const searchCharacterEpisodes = async (characterName: string) => {
  const characterEpisodes = await CharacterEpisodeModel.findAll({
    where: {
      [Sequelize.Op.or]: [
        {
          "$Character.firstName$": Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('firstName')), 'LIKE', `%${characterName}%`),
        },
        {
          "$Character.lastName$": Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('lastName')), 'LIKE', `%${characterName}%`),
        },
      ],
    },
    include: [
      {
        model: CharacterModel,
      },
      {
        model: EpisodeModel,
      },
    ],
  });

  const episodesList = [];
  for (const episode of characterEpisodes) {
    episodesList.push(episode.get({ plain: true }).Episode);
  }

  return episodesList;
};

export { getEpisodes, searchCharacterEpisodes };
