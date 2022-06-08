import { MovieInterface } from "../types/MovieInterface";

import { Request, Response } from "express";
import config from "../backend.config";

const axios = require("axios");

const IMDB_API_KEY = config.IMDB_API_KEY;
const baseURL = `https://imdb-api.com/en/API/SearchMovie/${IMDB_API_KEY}/`;

const getMovieList = async (titleObjects: Array<any>) => {
    let movieList: Array<MovieInterface> = [];
    for (let { title } of titleObjects) {
        try {
            let data = await axios.get(baseURL + title);
            if (data.data.errorMessage !== "") {
                return [];
            }
            console.log(data.data.results[0])
            movieList.push(data.data.results[0]);
        } catch (error) {
            return [];
        }
    }
    return movieList
}

export { getMovieList }