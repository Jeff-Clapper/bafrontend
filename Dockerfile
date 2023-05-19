FROM node:19-alpine3.16

ENV PORT=3000
ENV NODE_ENV=production
ENV APP_HOME /app 

WORKDIR $APP_HOME

COPY package.json package-lock.json ./

RUN npm install

COPY . ./
RUN echo REACT_APP_BODY_DATA=`js-yaml public/properties/bodyComponent.yaml` > .env
EXPOSE $PORT

RUN npm run build

CMD npm run start
