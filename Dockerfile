# Pull latest node image from docker
FROM node:latest

LABEL maintainer='charlesclinton2003@gmail.com'

# Creating ad work directory for the application
WORKDIR /usr/src/app

# copy package.json to install require dependencies
COPY package.json .

# install dependencies
RUN npm install

# copy app into folder
COPY . .

# expose ports
EXPOSE 5000

# start app
CMD ["npm", "start"]