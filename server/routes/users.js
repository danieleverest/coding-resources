const router = require('express').Router();
const User = require('../models/user');
const { loginRequired } = require('../auth');

router.get('/', getAllUsers);
router.get('/:id', getOneUser)
router.put('/:id', loginRequired, editUser);
router.delete('/:id', loginRequired, deleteUser);
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

    if (!user) throw new Error('User not found').message;

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
}

async function editUser(req, res) {
  try {
    const { update } = req.body;
    const user = await User.findById(req.params.id)
    
    if (!user) throw new Error('User not found').message;

    Object.assign(user, update);
    await user.save();
    res.status(200).json({
      success: true,
      message: 'User updated',
      user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
}

async function deleteUser(req, res) {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) throw new Error('User not found').message;

    res.status(200).json({
      success: true,
      message: 'User deleted',
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
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
  } catch (error) {
    res.status(401).json({
      success: false,
      error,
    });
  }
}
module.exports = router;
