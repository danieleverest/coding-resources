const mongoose = require('mongoose');

const config = require('./config');

const app = require('./app');

mongoose.Promise = Promise;

mongoose.connect(config.db, { useNewUrlParser: true })
  .then(() => console.log('Database Connected!'))
  .catch(() => console.log('Unable to connect to database. Please check credentials'));

app.listen(config.port, () => console.log(`Server is listening on port ${config.port}`));
