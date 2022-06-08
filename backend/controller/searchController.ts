import { Request, Response } from "express";
import config from "../backend.config";

const axios = require("axios");

const IMDB_API_KEY = config.IMDB_API_KEY;
const baseURL = `https://imdb-api.com/en/API/SearchMovie/${IMDB_API_KEY}/`;

export const searchController: Function = async (
  req: Request,
  res: Response
) => {
  try {
    let data = await axios.get(baseURL + req.query.q);
    if (data.data.errorMessage !== "") {
      return res.json({
        status: "FAILED",
        message: `Search failed. IMDB error message: ${data.data.errorMessage}`,
      });
    }
    return res.send(data.data.results);
  } catch (error) {
    return res
      .status(500)
      .json({ status: "FAILED", message: "Search failed. Try again." });
  }
};
