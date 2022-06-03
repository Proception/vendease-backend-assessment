import { EpisodeModel, CommentModel } from "../models";
import { Comment, Episode } from "../types/shared";

const createComment = async ({
  episodeId,
  comment,
  ipAddressLocation,
}: Comment) => {
  const episode: Episode = await EpisodeModel.findOne({
    where: {
      id: episodeId,
    },
  });

  if (!episode) {
    throw new Error(`Invalid Episode ID: ${episodeId}`);
  }
  return await CommentModel.create({ episodeId, comment, ipAddressLocation });
};

const getComments = async (episodeId: number) => {
  const comments: Comment = await CommentModel.findAll({
    where: {
      episodeId,
    },
    order: [["createdAt", "DESC"]],
  });
  return comments;
};
export { createComment, getComments };
