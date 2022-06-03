import app from "./app";
const CONFIG = require("./config");
import logger from "./util/logger";

const port: string | number = CONFIG.app.port || 8080;

app.listen(port, () => logger.info(`app listening on port ${port}!`));

export default app;
