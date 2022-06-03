const Sequelize =  require("sequelize");

const CONFIG = require("../config");
import logger from "../util/logger";

const ssl = process.env.NODE_ENV === "production";
const genericOptions = {
  dialect: "postgres",
  protocol: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    },
  },
  logging: false,
  port: CONFIG.database.port,
};

let sequelizeInstance;
if (CONFIG?.database?.url) {
  /* istanbul ignore next */
  sequelizeInstance = new Sequelize(CONFIG.database.url, genericOptions);
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
    logger.error("Connection has been established successfully.");
  })
  .catch((err: any) => {
    logger.error("Unable to connect to the database:", err);
  });

export default sequelizeInstance;
