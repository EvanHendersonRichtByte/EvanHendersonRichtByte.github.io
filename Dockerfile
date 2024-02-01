FROM node:14

WORKDIR /app

COPY package.json .

RUN npm install

RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache

VOLUME [ "/app/node_modules" ]

COPY . .

EXPOSE 3000

CMD ["npm", "start"]

# Command to build image
# docker build -t evanightly.github.io .

# Command to run container
# docker run -p 3000:3000 -v "$(pwd):/app" --rm --name evanightly.github.io -e CHOKIDAR_USEPOLLING=true evanightly.github.io