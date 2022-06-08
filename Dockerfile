FROM nikolaik/python-nodejs:python3.9-nodejs16

WORKDIR /app
COPY ./backend/package.json backend/
COPY ./backend/package-lock.json backend/
COPY ./backend backend/

COPY ./client/package.json client/
COPY ./client/package-lock.json /client/
COPY ./client client/

RUN npm --prefix ./client install

RUN npm --prefix ./client run build

RUN cp -r client/build backend/dist/

RUN npm --prefix ./backend install

ENV VIRTUAL_ENV=backend/model/venv
RUN python3 -m venv $VIRTUAL_ENV
ENV PATH="$VIRTUAL_ENV/bin:$PATH"

RUN pip3 install -r backend/model/requirements.txt

RUN python3 backend/model/server.py &

RUN npm --prefix ./backend run build

CMD ["npm", "--prefix", "./backend", "run", "start"]