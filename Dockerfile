FROM node:14

COPY . /
WORKDIR /

RUN yarn install --force
RUN yarn build:ssr
CMD yarn start