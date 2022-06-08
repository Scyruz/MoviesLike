"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const backend_config_1 = __importDefault(require("../backend.config"));
const axios = require("axios");
const IMDB_API_KEY = backend_config_1.default.IMDB_API_KEY;
const baseURL = `https://imdb-api.com/en/API/SearchMovie/${IMDB_API_KEY}/`;
