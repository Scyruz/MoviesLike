import express, { Express } from "express";
import backendConfig from "./backend.config";

// import routes file
const routes = require("./routes");

const app: Express = express();
const port = backendConfig.PORT;

app.use(routes);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
