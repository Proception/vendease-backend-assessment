import { CharacterModel } from "../models";

const findCharacters = async ({ filters, sort }: any) => {
  // let sortArray = []
  // for (const sort in sorts) {
  //     sortArray.push([sorts, sorts[sort]])
  // }
  const characters = CharacterModel.findAll({
    // order: sortArray,
    where: { ...filters },
  });

  return characters;
};

export { findCharacters };
