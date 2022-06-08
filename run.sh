#!/bin/sh

npm run start --bind 0.0.0.0:$PORT wsgi & python model/server.py && echo wow