FROM nikolaik/python-nodejs:python3.8-nodejs16-slim

WORKDIR /app
COPY ./backend ./

RUN pip install \
    --no-cache-dir \
    --compile \
    -r model/requirements.txt
RUN npm install 
RUN npm run build


CMD ["npm", "run", "start", "--bind", "0.0.0.0:$PORT", "wsgi"]