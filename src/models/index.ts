// @ts-nocheck
const { DataTypes } = require("sequelize");

import sequelizeInstance from "../components/sequelize";

export const LocationModel = require("./location")(
  sequelizeInstance,
  DataTypes
);
export const CommentModel = require("./comment")(sequelizeInstance, DataTypes, {
  Episode: EpisodeModel,
});
export const EpisodeModel = require("./episode")(sequelizeInstance, DataTypes, {
  Comment: CommentModel,
});
export const CharacterModel = require("./character")(
  sequelizeInstance,
  DataTypes,
  { Location: LocationModel }
);
export const CharacterEpisodeModel = require("./characterepisode")(
  sequelizeInstance,
  DataTypes,
  { Episode: EpisodeModel, Character: CharacterModel }
);
