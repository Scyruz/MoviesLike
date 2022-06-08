import { Request, Response } from "express";

export const likeController: Function = async (req: Request, res: Response) => {
  const movieName = req.query.q;
  // make request to python websocket using movieName
};
