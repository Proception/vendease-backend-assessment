// @ts-nocheck
import Sequelize from "sequelize";

import CONFIG from "../config";

const ssl = process.env.NODE_ENV === "production";
const genericOptions = {
  dialect: "postgres",
  protocol: "postgres",
  dialectOptions: {
    ssl,
  },
  logging: false,
  port: CONFIG.database.port,
};

let sequelizeInstance;
if (process.env.DATABASE_URL) {
  /* istanbul ignore next */
  sequelizeInstance = new Sequelize(process.env.DATABASE_URL, genericOptions);
} else {
  sequelizeInstance = new Sequelize(
    CONFIG.database.database,
    CONFIG.database.username,
    CONFIG.database.password,
    genericOptions
  );
}

sequelizeInstance
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

export default sequelizeInstance;
