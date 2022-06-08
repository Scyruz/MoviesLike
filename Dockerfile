FROM nikolaik/python-nodejs:python3.8-nodejs16-slim

WORKDIR /app
COPY ./backend ./backend

RUN pip install \
        --no-cache-dir \
        --compile \
        -r backend/model/requirements.txt
RUN npm install 
RUN npm run build


CMD ["npm", "--prefix", "./backend", "run", "start"]