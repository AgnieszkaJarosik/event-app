# Event App

This project is simple app with frontend implemented in
React and connected with a simple API written in Node.js with data saved in MongoDB.

## UI

### Installation

In ./ui run:

#### `npm install`

### Scripts

To start frontend in ./ui run:

#### `npm start`

To run tests in ./ui run:

#### `npm test`

## API

In order to use this api you need running MongoDB.

### Start a MongoDB Server

For complete MongoDB installation instructions, see [the manual](https://docs.mongodb.com/manual/installation/).

1. Download the right MongoDB version from [MongoDB](https://www.mongodb.com/try)
1. Create a database directory (in this case under /data).
1. Install and start a mongod process.

#### `mongod --dbpath=/data`

You should see the mongod process start up and print some status information.

### Connect to MongoDB

To connect api with databases you need to provide proper environment variables.
Firstly, in `./api` directory create `.env` file. You can use `.env.example` file as a template.

### Installation

In ./api run:

#### `npm install`

### Scripts

To start frontend in ./api run:

#### `npm start`

To run tests in ./api run:

#### `npm test`
