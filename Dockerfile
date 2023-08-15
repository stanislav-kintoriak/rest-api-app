from node:18-alpine

WORKDIR  C:/Users/HP/Documents/Github/rest-api-app

COPY ./package.json  ./

RUN npm install

COPY ./ ./

CMD ["npm" "run" "start:dev"]