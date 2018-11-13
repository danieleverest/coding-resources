const router = require('express').Router();

const Users = require('../db/models/users');

router.get('/', (req, res) => {
  Users.find({})
    .then(result => res.json(result))
    .catch(() => console.log('Unable to fetch users'));
});

router.get('/:id', (req, res) => {
  Users.findById(req.body.id)
    .then(result => res.json(result))
    .catch(() => console.log('Unable to fetch an user'));
});

module.exports = router;
