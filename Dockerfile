FROM pmm/node
COPY . /src
WORKDIR /src

RUN npm install

EXPOSE 3000

ENTRYPOINT ["npm", "start"]