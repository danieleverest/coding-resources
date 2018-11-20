const router = require('express').Router();
const User = require('../models/user');

/**
 * Register new user
 * @public POST /auth/register
 */
router.post('/register', register);

/**
 * Login. Returns json web token
 * @public POST /auth/register
 */
router.post('/login', login);

// Route functions
async function register(req, res) {
  try {
    const { username, email, password } = req.body;
    // input validated pre-save by User model and password hashed
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
}

async function login(req, res) {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    // User not found
    if (!user) throw new Error('Username not found');
    // Incorrect password
    const pwIsValid = await user.checkPassword(password);
    if (!pwIsValid) throw new Error('Password is incorrect');
    // User found and correct password: login()
    user.login(res);
  } catch ({ message }) {
    res.json({
      success: false,
      message,
    });
  }
}

module.exports = router;
