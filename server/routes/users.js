const router = require('express').Router();
const User = require('../models/user');
const { loginRequired } = require('../auth');

// Backend only
// Don't think it needs to connect to frontend
router.get('/', async (req, res) => {
  try {
    const users = await User.find({});
    res.json({
      success: true,
      users,
    });
  } catch (error) {
    res.status(400).json({
      success: true,
      error,
    });
  }
});

// View user
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) throw new Error('User not found');
    res.status(200).json({
      success: true,
      user,
    });
  } catch ({ message }) {
    res.status(400).json({
      success: false,
      message,
    });
  }
});

router.put('/:id', loginRequired, async (req, res) => {
  try {
    const { update } = req.body;
    const user = await User.findById(req.params.id)
    if (!user) throw new Error('User not found');
    Object.assign(user, update);
    await user.save();
    res.status(200).json({
      success: true,
      message: 'User updated',
      user,
    });
  } catch ({ message }) {
    res.status(400).json({
      success: false,
      message,
    });
  }
});

// Delete user
router.delete('/:id', loginRequired, async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) throw new Error('User not found');
    res.status(200).json({
      success: true,
      message: 'User deleted',
    });
  } catch ({ message }) {
    res.status(400).json({
      success: false,
      message,
    });
  }
});

// Dev only for testing
// TO BE DELETED
router.delete('/', async (req, res) => {
  try {
    await User.deleteMany({});
    res.json({
      success: true,
      message: 'All users deleted',
    });
  } catch ({ message }) {
    res.status(401).json({
      success: false,
      message,
    });
  }
});

module.exports = router;
