import { Request, Response } from "express";

export const likeController: Function = async (req: Request, res: Response) => {
  const { movieId, movieName } = req.query;
  // make request to python websocket using movieName
  console.log(movieId, movieName);
  return res.status(200);
};
