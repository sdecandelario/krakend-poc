FROM node:8.7-alpine

WORKDIR /home/app

ADD package.json /home/app
RUN npm install
ADD . /home/app

CMD [ "node", "server.js" ]

EXPOSE 3000
