FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . ./

EXPOSE 3000

RUN npx sequelize-cli db:migrate

CMD ["npm", "start"]