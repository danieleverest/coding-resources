const express = require('express');

const router = express.Router();

const User = require('../models/User');

router.get('/users', (req, res) => {
  User.find({}).then(result => res.send(result));
});

module.exports = router;
