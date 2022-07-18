FROM ubuntu:20.04
WORKDIR /app
COPY /app/package.json .
RUN apt-get update -y && apt-get install nodejs -y && apt-get install npm -y && apt-get install vim -y && npm install

COPY /app .
CMD [ "npm", "start" ]


