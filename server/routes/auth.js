const router = require('express').Router();
const User = require('../models/user');

// /auth/register
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    await User.create({
      username,
      email,
      password,
    });
    res.status(201).json({
      success: true,
      message: 'Registration successful',
    });
  } catch ({ message }) {
    res.status(400).json({
      success: false,
      message,
    });
  }
});

// /auth/login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    // User not found
    if (!user) throw new Error('Username not found');
    // Incorrect password
    const pwIsValid = await user.checkPassword(password)
    if (!pwIsValid) throw new Error('Password is incorrect');
    // User found and correct password: return token
    res.json(user.login());
  } catch ({ message }) {
    res.json({
      success: false,
      message,
    });
  }
});

module.exports = router;
