const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan')

// Import routes
const users = require('./routes/users');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );

  next();
});

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/users', users);

module.exports = app;
