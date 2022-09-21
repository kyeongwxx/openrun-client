FROM node:14

COPY . /
WORKDIR /

RUN yarn install
RUN yarn build:ssr
CMD yarn start