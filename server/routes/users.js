const router = require('express').Router();
const User = require('../models/user');
const { loginRequired } = require('../auth');

/**
 * Get a list of all registered users
 * @public GET /users
 */
router.get('/', getAllUsers);

/**
 * Get a single user
 * @public GET /users/:id
 */
router.get('/:id', getOneUser)

/**
 * Edit a user
 * @private PUT /users/:id
 */
router.put('/:id', loginRequired, editUser);

/**
 * Delete a user
 * @private DELETE /users/:id
 */
router.delete('/:id', loginRequired, deleteUser);

/**
 * Delete a user
 * @private DELETE /users/:id
 * TO BE DELETED
 */
router.delete('/', deleteAllUsers);

// Route functions
async function getAllUsers(req, res) {
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
}

async function getOneUser(req, res) {
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
}

async function editUser(req, res) {
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
}

async function deleteUser(req, res) {
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
}

async function deleteAllUsers(req, res) {
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
}
module.exports = router;
