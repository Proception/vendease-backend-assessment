import bodyParser from "body-parser";
import cors from "cors";
import express, { Express } from "express";
import morgan from "morgan";
import json from "morgan-json";
import swaggerUi from "swagger-ui-express";

import "./models";
import documentation from "./server/components/swagger";
import routes from "./server/routes"
import { notFound } from "./server/components/not-found-handler";
import { catchAll } from "./server/components/catch-all-errors-handler";

const app: Express = express();
// use JSON log format in all environments that aren't localdev
if (process.env.NODE_ENV !== "local") {
    const format = json({
        method: ":method",
        url: ":url",
        status: ":status",
        "response-time": ":response-time",
    });
    app.use(morgan(format));
} else {
    app.use(morgan("tiny"));
}
app.use(cors());
app.use(bodyParser.json());

app.all('/', ((req, res) => {
    return res.status(200).json({
        message: 'Server is running'
    });
}));

// Swagger
app.use(
    "/documentation",
    swaggerUi.serve,
    swaggerUi.setup(documentation, { explorer: true })
);

// Routes
app.use(routes);

//Execute a not found error handler if route is not found
app.use(notFound)
app.use(catchAll)

export default app;