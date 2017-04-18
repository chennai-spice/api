FROM node:latest
MAINTAINER Mohammed Zubair
RUN mkdir -p /var/app
WORKDIR /var/app
# RUN npm install -g nodemon
# RUN npm install -g localtunnel

ADD package.json /var/app/package.json

RUN npm install

# copy . /var/app

EXPOSE 3000

CMD npm run dev
