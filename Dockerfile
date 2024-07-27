FROM node:16

RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

WORKDIR /usr/src/app

COPY ./build/ /usr/src/app/build

COPY package*.json ./

RUN npm install

CMD ["npm", "start"]
