# Blue-hunter

The project is generated by [LoopBack](http://loopback.io).

## Packages added for testing:
- mocha
- chai
- supertest

`npm install --save-dev mocha chai supertest`

## How to run:

### To run tests and dev-related stuff, set the environment variable NODE_ENV to "dev"

`NODE_ENV=dev node .`

### To run with MySQL database:

`docker-compose up`

### Then, to run on staging mode and user the explorer:

`NODE_ENV=stage node .`

### To run on production mode (no explorer):

`NODE_ENV=prod node .`
