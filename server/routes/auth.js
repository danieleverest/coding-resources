const router = require('express').Router();
const User = require('../db/models/users');

// /auth/register
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await User.create({
      username,
      email,
      password,
    });
    res.json({
      success: true,
      message: 'Registration successful',
      user,
    });
  } catch (error) {
    res.json({
      success: false,
      message: 'Unable to register',
      error,
    });
  }
});

// /auth/login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    // User not found
    if (!user) {
      res.json({
        success: false,
        message: 'Unable to login. User not found',
      });
    }
    // Incorrect password
    if (!user.checkPassword(password)) {
      res.json({
        success: false,
        message: 'Unable to login. Incorrect password',
      });
    }
    // User found and correct password: return token
    res.json(user.login());
  } catch (error) {
    res.json({
      success: false,
      message: 'Unable to login',
      error,
    });
  }
});

module.exports = router;
