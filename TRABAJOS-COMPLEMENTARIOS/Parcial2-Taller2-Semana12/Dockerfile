FROM node
COPY . /var/www
WORKDIR /var/www
RUN npm install
EXPOSE 8000
ENTRYPOINT ["npm","start"]