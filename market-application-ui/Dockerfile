# Stage 0, "build-stage", based on Node.js to build the frontend
FROM node:alpine as build
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . /app/
RUN npm run build
CMD [ "node" , "server/server.js" ];