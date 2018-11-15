const router = require('express').Router();
const Users = require('../db/models/users');
const { loginRequired } = require('../auth');

// Backend only
// Don't think it needs to connect to frontend
router.get('/', async (req, res) => {
  try {
    const users = await Users.find({});
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

// View user profile page
router.get('/:id', async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    if (!user) {
      res.json({
        success: false,
        message: 'User not found',
      });
    }
    res.json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const user = await Users.findByIdAndUpdate(req.params.id, { password: 123 });
    if (!user) {
      res.json({
        success: false,
        message: 'User not found',
      });
    }
    res.json({
      success: true,
      message: 'User updated',
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
});

// Delete user
router.delete('/:id', async (req, res) => {
  try {
    const user = await Users.findByIdAndDelete(req.params.id);
    if (!user) {
      res.json({
        success: false,
        message: 'User not found',
      });
    }
    res.json({
      success: true,
      message: 'User deleted',
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
});

// Dev only
// TO BE DELETED
router.delete('/', loginRequired, async (req, res) => {
  try {
    await Users.deleteMany({});
    res.json({
      success: true,
      message: 'All users deleted',
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Not authorized: Unable to delete users',
      error,
    });
  }
});

module.exports = router;
