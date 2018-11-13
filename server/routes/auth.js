const argon2 = require('argon2');
const router = require('express').Router();
const Users = require('../db/models/users');

// /auth/signup
router.post('/signup', async (req, res) => {
  try {
    const { username, password } = req.body;
    if (password.length < 6) res.json({ password: 'Password must be 6 or more characters' });

    const hash = await argon2.hash(password)
    const user = new Users({
      username,
      password: hash,
    });
    const newUser = await user.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
