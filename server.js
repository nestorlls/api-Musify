const container = require('./src/startup/container');
const server = container.resolve('app');
const { MONGO_DB_URI } = container.resolve('config');

const mongoose = require('mongoose');

mongoose
  .connect(MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
  })
  .then(() => {
    console.log('Connected to MongoDB');
    server.start();
  })
  .catch((err) => {
    console.log(err);
  });
