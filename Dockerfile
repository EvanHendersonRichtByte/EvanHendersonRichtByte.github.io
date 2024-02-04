FROM node:16.3.0-alpine3.11

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]

# Command to build image
# docker build -t evanightly.github.io .

# Command to run container
# docker run -p 3000:3000 -v "$(pwd):/app" --rm --name evanightly.github.io -e CHOKIDAR_USEPOLLING=true evanightly.github.io