FROM node:16
WORKDIR /usr/src/app/backend
COPY . .
RUN npm install
CMD ["npm", "run", "dev"]