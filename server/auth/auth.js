const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const User = require('../db/models/users');
const { secret } = require('../config');

// passport middleware to validate token
passport.use(new JWTstrategy({
  secretOrKey: secret,
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
}, async (token, done) => {
  try {
    return done(null, token.user);
  } catch (error) {
    return done(error);
  }
}));

// passport middleware for registration
passport.use('signup', new LocalStrategy({
  username: 'username',
  password: 'password',
}, async (username, password, done) => {
  try {
    const user = await User.create({ username, password });
    return done(null, user);
  } catch (error) {
    return done(error);
  }
}));

// passport middleware for login
passport.use('login', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
}, async (username, password, done) => {
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return done(null, false, { message: 'User not found' });
    }

    const validate = await user.isValidPassword(password);
    if (!validate) {
      return done(null, false, { message: 'Wrong password' });
    }

    return done(null, user, { message: 'Logged in successfully' });
  } catch (error) {
    return done(error);
  }
}));
