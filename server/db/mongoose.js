const mongoose = require('mongoose');

const config = require('../config');

mongoose.Promise = Promise;

mongoose.connect(config.db, { useNewUrlParser: true })
  .then(() => console.log('Database Connected!'))
  .catch(() => console.log('Unable to connect to database. Please check credentials'));

module.exports = mongoose;
