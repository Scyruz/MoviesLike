const cors = require("cors");
import express, { Express } from "express";
import backendConfig from "./backend.config";
// import cors library for cors config

// import routes file
const routes = require("./routes");

const app: Express = express();
const port = backendConfig.PORT;

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(routes);
// let express app use json parsing
app.use(express.json());

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
