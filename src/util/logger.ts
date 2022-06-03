import { createLogger, format, transports } from "winston";

const { combine, prettyPrint, json, errors } = format;
const logger = createLogger({
  format: combine(errors({ stack: true }), json()),
  transports: [new transports.Console()],
});

if (process.env.NODE_ENV === "local") {
  logger.add(
    new transports.Console({
      format: combine(errors({ stack: true }), prettyPrint()),
    })
  );
}

export default logger;
