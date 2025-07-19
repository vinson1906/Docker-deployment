FROM node:20

WORKDIR /app

COPY  package*.json ./

RUN npm install

COPY  . .

ENV PORT=6500

EXPOSE 6500

CMD [ "npm","run","dev" ]