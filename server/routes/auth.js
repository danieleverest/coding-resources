const router = require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { secret } = require('../config');

// /auth/signup
router.post('/signup', passport.authenticate('signup', { session: false }), async (req, res) => {
  res.json({
    message: 'Signup successful',
    user: req.user,
  });
});

router.post('/login', async (req, res, next) => {
  passport.authenticate('login', async (err, user, info) => {
    try {
      if (err || !user) {
        return next(err)
      }

      req.login(user, { session: false }, async (error) => {
        if (error) return next(error);
        const body = { _id: user._id, username: user.username };
        const token = jwt.sign({ user: body }, secret);
        return res.json({ token });
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});


module.exports = router;
