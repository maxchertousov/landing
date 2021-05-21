FROM mhart/alpine-node:12.16.2

RUN mkdir -p /var/www
WORKDIR /var/www

RUN apk update && apk add python-dev bash make g++
CMD npm install -g yarn