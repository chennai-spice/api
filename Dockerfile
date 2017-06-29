FROM node:latest
MAINTAINER Mohammed Zubair
RUN mkdir -p /var/app
WORKDIR /var/app
RUN apt-get update && apt-get install -y build-essential libcups2-dev libudev-dev
# RUN npm install -g nodemon
# RUN npm install -g localtunnel

ADD package.json package.json

RUN npm install

COPY . /var/app

EXPOSE 3000

CMD npm start
