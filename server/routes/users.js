const router = require('express').Router();
const User = require('../models/User');

router.get('/', (req, res) => {
  User.find({})
    .then(result => res.json(result))
    .catch(() => console.log('Unable to fetch users'));
});

router.get('/:id', (req, res) => {
  User.findById(req.body.id)
    .then(result => res.json(result))
    .catch(() => console.log('Unable to fetch user'));
});

module.exports = router;
