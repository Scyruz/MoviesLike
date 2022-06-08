import { Request, Response } from "express";
import { getMovieList } from "../utils/getMoviesByTitle"

export const likeController: Function = async (req: Request, res: Response) => {
  const movieName = req.query.q!;
  // make request to python websocket using movieName
  // Websocket to call model.py
  const WebSocketClient = require('websocket').client;
  var client = new WebSocketClient();

  client.on('connectFailed', function (error: Error) {
    console.log('Connect Error: ' + error.message);
  });

  client.on('connect', function (connection: any) {
    connection.on('error', function (error: Error) {
      console.log("Connection Error: " + error.message);
      res.status(400)
    });
    connection.on('close', function () {
      console.log('WebSocket Connection Closed');
    });
    connection.on('message', async (message: any) => {
      if (message.type === 'utf8') {
        const data = JSON.parse(message.utf8Data).recommendation_titles
        console.log("Received: " + data);

        if (data.length) {
          const movieList = await getMovieList(data);
          return res.json(movieList);
        } else {
          return res.status(400).send();
        }
      }
    });

    function sendTitle(title: any) {
      if (connection.connected) {
        connection.sendUTF(title);
        setTimeout(sendTitle, 1000);
      }
    }
    sendTitle(movieName);
  });

  client.connect('ws://localhost:8765/');
};