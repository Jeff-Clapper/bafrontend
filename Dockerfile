FROM node:19-alpine3.16

ENV PORT=3000
ENV NODE_ENV=production
ENV APP_HOME /app 

WORKDIR $APP_HOME

COPY package.json package-lock.json ./

RUN npm install

COPY . ./
EXPOSE $PORT

CMD npm run start