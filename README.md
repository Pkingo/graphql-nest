# GraphQL NestJS POC Project 🚀

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
After the app is running, visit http://localhost:3000/graphql to try out the GraphQl playground

## Docker
A docker container with mongo is used for local development
```bash
# Build a mongo docker container and name it 'mongo'
sudo build -t mongo mongo:latest
# Run mongo container and open the port 27017, which mongo uses
sudo docker run -p 27017:27017 mongo
```


## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
