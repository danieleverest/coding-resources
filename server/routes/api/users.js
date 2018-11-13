const User = require('../../db/models/user');

module.exports = (router) => {
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
};
