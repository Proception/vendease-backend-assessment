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

  return comment;
};

module.exports = Comment;
