"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchController = void 0;
const backend_config_1 = __importDefault(require("../backend.config"));
const axios = require("axios");
const IMDB_API_KEY = backend_config_1.default.IMDB_API_KEY;
const baseURL = `https://imdb-api.com/en/API/SearchMovie/${IMDB_API_KEY}/`;
const searchController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = yield axios.get(baseURL + req.query.q);
        if (data.data.errorMessage !== "") {
            return res.json({
                status: "FAILED",
                message: `Search failed. IMDB error message: ${data.data.errorMessage}`,
            });
        }
        return res.send(data.data.results);
    }
    catch (error) {
        return res
            .status(500)
            .json({ status: "FAILED", message: "Search failed. Try again." });
    }
});
exports.searchController = searchController;
