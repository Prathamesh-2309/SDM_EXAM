FROM node
WORKDIR /src
COPY . .
EXPOSE 8003
CMD node server.js
