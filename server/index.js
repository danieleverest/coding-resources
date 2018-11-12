const mongoose = require('mongoose');

const { database: { USER, PASS, ADDRESS, PORT } } = require('./constants');

mongoose.Promise = global.Promise;

const DB = `mongodb://${USER}:${PASS}${ADDRESS}`;

mongoose.connect(DB, { useNewUrlParser: true })
  .then(() => console.log('Database Connected!'))
  .catch(() => console.log('Unable to connect to database. Please check credentials'));

const app = require('./app');

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
