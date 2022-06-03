import {CharacterModel, LocationModel} from "../models";
import Sequelize from "sequelize";

const findCharacters = async ({ filters, sorts }: any) => {
  let sortArray = []
  for (const sort in sorts) {
    if (!!sorts[sort]) {
      sortArray.push([sort, sorts[sort]])
    }
  }

  if (filters?.location) {
    filters = {
      ...filters,
      "$Location.name$": Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('name')), '=', `${filters?.location}`),
    }
    delete filters.location;
  }

  // delete filters if none was passed
  if (!filters.gender) delete filters.gender
  if (!filters.status) delete filters.status
  if (!filters.location) delete filters.location

  const characters = CharacterModel.findAll({
    order: sortArray,
    where: {
      ...filters,
    },
    include: [
      {
        model: LocationModel,
      },
    ],
  });

  return characters;
};

export { findCharacters };
