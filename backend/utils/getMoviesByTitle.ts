import { MovieInterface } from "../types/MovieInterface";

import { Request, Response } from "express";
import config from "../backend.config";

const axios = require("axios");

const IMDB_API_KEY = config.IMDB_API_KEY;
const baseURL = `https://imdb-api.com/en/API/SearchMovie/${IMDB_API_KEY}/`;
