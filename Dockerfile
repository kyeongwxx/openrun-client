FROM node:14

COPY . /F8B4-TEAM03-CLIENT/
WORKDIR /F8B4-TEAM03-CLIENT/

RUN yarn install
RUN yarn build:ssr
CMD yarn start