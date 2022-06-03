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

  character.Location = character.belongsTo(Location, { foreignKey: 'location' });

  return character;
};

module.exports = Character;
