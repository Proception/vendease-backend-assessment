// @ts-nocheck
const CharacterEpisode = (
  sequelizeInstance: any,
  DataTypes: any,
  { Episode, Character }: { Episode: any }
) => {
  const characterEpisode = sequelizeInstance.define(
    "CharacterEpisodes",
    {
      characterId: DataTypes.INTEGER,
      episodeId: DataTypes.INTEGER,
    },
    {}
  );
  characterEpisode.Episode = characterEpisode.belongsTo(Episode, {
    foreignKey: "episodeId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });

  characterEpisode.Character = characterEpisode.belongsTo(Character, {
    foreignKey: "characterId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });

  return characterEpisode;
};

module.exports = CharacterEpisode;
