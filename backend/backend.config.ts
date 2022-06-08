import dotenv from "dotenv";
dotenv.config();

export default {
  PORT: process.env.PORT,
  IMDB_API_KEY: process.env.IMDB_API_KEY,
};
