// @ts-nocheck
const Location = (sequelizeInstance: any, DataTypes: any) => {
  const location = sequelizeInstance.define(
    "Location",
    {
      name: DataTypes.STRING,
      latitude: DataTypes.DOUBLE,
      longitude: DataTypes.DOUBLE,
    },
    {}
  );

  return location;
};

module.exports = Location;
