const router = require('express').Router();

const Resources = require('../db/models/resources');

router.get('/', (req, res) => {
  Resources.find({})
    .then(result => res.json(result))
    .catch(() => console.log('Unable to fetch resources'));
});

router.get('/', (req, res) => {
  Resources.findById(req.body.id)
    .then(result => res.json(result))
    .catch(() => console.log('Unable to fetch a resource'));
});

module.exports = router;
