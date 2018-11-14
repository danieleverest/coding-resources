const express = require('express');
require('./auth/auth');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(helmet());
app.use(cors());

const { users, resources, auth } = require('./routes');

app.use('/users', users);
app.use('/auth', auth);
app.use('/resources', resources);

module.exports = app;
