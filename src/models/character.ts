// @ts-nocheck
const Character = (
  sequelizeInstance: any,
  DataTypes: any,
  { Location }: { Location: any }
) => {
  const character = sequelizeInstance.define(
    "Character",
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      status: DataTypes.STRING,
      stateOfOrigin: DataTypes.STRING,
      gender: DataTypes.STRING,
      location: DataTypes.INTEGER,
    },
    {}
  );

  character.Location = character.hasOne(Location);
  // character.Episodes = character.hasMany(CharacterEpisodes, { foreignKey: 'characterId' })

  return character;
};
// Character.associate = (models) => {
//     // associations can be defined here
//     Character.hasOne(models.Location, {
//         foreignKey: 'characterId',
//     });
//     Character.hasMany(models.CharacterEpisode, {
//         foreignKey: 'characterId',
//     });
// };

module.exports = Character;
