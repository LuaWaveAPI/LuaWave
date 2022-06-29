FROM node:16

EXPOSE 8080

WORKDIR /usr/src/app/
COPY . .

WORKDIR /usr/src/app/frontend/
RUN npm install
RUN npm run build
RUN rm .gitignore package.json package-lock.json public README.md src node_modules -rf

WORKDIR /usr/src/app
RUN rm photosArticles -rf

WORKDIR /usr/src/app/Backend
RUN npm install --omit=dev
RUN rm .gitignore package-lock.json .env.template Documents -rf

ENTRYPOINT [ "npm", "start" ]