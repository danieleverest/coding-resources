const router = require('express').Router();
const checkJwt = require('../auth/auth');
const Users = require('../db/models/users');

// Backend only
// Don't think it needs to connect to frontend
router.get('/', async (req, res) => {
  try {
    const users = await Users.find({});
    res.json(users);
  } catch (error) {
    res.status(400).json(error);
  }
});

// View user profile page
router.get('/:id', async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    res.json(user || 'User not found');
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const user = await Users.findByIdAndUpdate(req.params.id, { password: 123 });
    res.json(user || 'User not found');
  } catch (error) {
    res.status(400).json(error);
  }
});

// Delete user
router.delete('/:id', checkJwt, async (req, res) => {
  try {
    const deletedUser = await Users.findByIdAndDelete(req.params.id);
    res.json(deletedUser ? `deleted ${deletedUser.username}` : 'User not found');
  } catch (error) {
    res.status(400).json(error);
  }
});

// Dev only
// TO BE DELETED
router.delete('/', async (req, res) => {
  try {
    await Users.deleteMany({});
    res.send('deleted all');
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
