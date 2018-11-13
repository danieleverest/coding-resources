const mongoose = require('mongoose');

const { database: { USER, PASS, ADDRESS, PORT } } = require('./constants');

mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);

const DB = `mongodb://${USER}:${PASS}${ADDRESS}`;

mongoose
  .connect(DB)
  .then(() => console.log('Database Connected!'))
  .catch(() => console.log('Unable to connect to database. Please check credentials'));

const app = require('./app');

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
