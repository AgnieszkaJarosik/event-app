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

To use this api you need to run MongoDB on your local machine.

### Start a MongoDB Server

For complete MongoDB installation instructions, see [the manual](https://docs.mongodb.com/manual/installation/).

1. Download the right MongoDB version from [MongoDB](https://www.mongodb.com/try)
1. Create a database directory.
1. Install and start a mongod process.

You should see the mongod process start up and print some status information.

### Connect to MongoDB

In order to connect api to the database you need to provide the appropriate environment variables.
Firstly, in `./api` directory create `.env` file. You can use `.env.example` file as a template.

### Installation

In ./api run:

#### `npm install`

### Scripts

To start frontend in ./api run:

#### `npm start`

To run tests in ./api run:

#### `npm test`
