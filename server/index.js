require('dotenv').config();
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const USER = process.env.DB_USER;
const PASS = process.env.DB_PASS;
const ADDRESS = process.env.DB_ADDRESS;

const DB = `mongodb://${USER}:${PASS}${ADDRESS}`;

mongoose
  .connect(
    DB,
    { useNewUrlParser: true }
  )
  .then(() => console.log('Database Connected!'))
  .catch(() =>
    console.log('Unable to connect to database. Please check credentials')
  );

const app = require('./app');

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
