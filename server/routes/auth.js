const router = require('express').Router();
const User = require('../db/models/users');

// /auth/signup
router.post('/signup', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = new User({
      username,
      password,
    });
    const newUser = await user.save();
    res.json(newUser);
  } catch (error) {
    res.status(400).json(error);
  }
});
