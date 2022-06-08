FROM nikolaik/python-nodejs:python3.8-nodejs16-slim

WORKDIR /app
COPY ./backend ./
COPY ./run.sh ./run.sh

RUN pip install \
    --no-cache-dir \
    --compile \
    -r model/requirements.txt
RUN npm install 
RUN npm run build


CMD /app/run.sh
