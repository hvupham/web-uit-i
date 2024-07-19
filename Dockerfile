FROM node:alpine

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install

CMD ["npm", "run dev", "--host", "0.0.0.0"]

# docker build -t shopapp-angular . 
# docker run -p 4201:4200 shopapp-angular