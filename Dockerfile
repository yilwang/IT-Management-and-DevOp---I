FROM node:14-alpine 
#I can run two to three container for price(computing)

COPY . .

RUN npm install

CMD ["npm", "run", "test"]
#CMD short for command