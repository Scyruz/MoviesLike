import { Request, Response } from "express";
import { likeController } from "./controller/likeController";
import { searchController } from "./controller/searchController";

// import express router to configure routes
const router = require("express").Router();

router.get("/", (req: Request, res: Response) => {
  return res.send("hi");
});

router.get("/search", searchController);

router.get("/like", likeController);

module.exports = router;
