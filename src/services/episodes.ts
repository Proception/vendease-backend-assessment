import Sequelize from "sequelize";

import {
  EpisodeModel,
  CommentModel,
  CharacterEpisodeModel,
  CharacterModel,
} from "../models";

const getEpisodes = async () => {
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
};

const searchCharacterEpisodes = async (characterName: string) => {
  const characterEpisodes = await CharacterEpisodeModel.findAll({
    where: {
      [Sequelize.Op.or]: [
        {
          "$Character.firstName$": { [Sequelize.Op.like]: characterName },
        },
        {
          "$Character.lastName$": { [Sequelize.Op.like]: characterName },
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
