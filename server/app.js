const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(helmet());
app.use(cors());

require('./routes')(app);

module.exports = app;
