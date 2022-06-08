"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors = require("cors");
const express_1 = __importDefault(require("express"));
const backend_config_1 = __importDefault(require("./backend.config"));
// import cors library for cors config
// import routes file
const routes = require("./routes");
const app = (0, express_1.default)();
const port = backend_config_1.default.PORT;
app.use(cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
}));
app.use(routes);
// let express app use json parsing
app.use(express_1.default.json());
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
