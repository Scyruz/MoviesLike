"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const likeController_1 = require("./controller/likeController");
const searchController_1 = require("./controller/searchController");
// import express router to configure routes
const router = require("express").Router();
router.get("/", (req, res) => {
    return res.send("hi");
});
router.get("/search", searchController_1.searchController);
router.get("/like", likeController_1.likeController);
module.exports = router;
