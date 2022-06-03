// @ts-nocheck
const Episode = (
  sequelizeInstance: any,
  DataTypes: any,
  { Comment }: { Comment: any }
) => {
  const episode = sequelizeInstance.define(
    "Episode",
    {
      name: DataTypes.STRING,
      code: DataTypes.STRING,
      releaseDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {}
  );
  episode.Comments = episode.hasMany(Comment, {
    foreignKey: "episodeId",
    sourceKey: "id",
  });
  return episode;
};

// Episode.associate = (models: any) => {
//     // associations can be defined here
//     Episode.hasMany(models.Comment, {
//         foreignKey: 'episodeId'
//     });
// };

module.exports = Episode;
