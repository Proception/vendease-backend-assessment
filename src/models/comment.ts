// @ts-nocheck
const Comment = (
  sequelizeInstance: any,
  DataTypes: any,
  { Episode }: { Episode: any }
) => {
  const comment = sequelizeInstance.define(
    "Comment",
    {
      comment: DataTypes.STRING(249),
      ipAddressLocation: DataTypes.STRING,
      episodeId: DataTypes.INTEGER,
    },
    {}
  );

  // comment.Episode = comment.belongsTo(Episode, {
  //     foreignKey: 'episodeId',
  //     onDelete: 'CASCADE',
  //     onUpdate: 'CASCADE',
  // });

  return comment;
};

// Comment.associate = (models) => {
//     // associations can be defined here
//     Comment.belongsTo(models.Character, {
//         foreignKey: 'episodeId',
//         onDelete: 'CASCADE',
//         onUpdate: 'CASCADE',
//     });
// };

module.exports = Comment;
