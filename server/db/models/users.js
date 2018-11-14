const mongoose = require('mongoose');
const argon2 = require('argon2');

const Users = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: [true, 'Username is required'],
    minlength: [5, 'Must be at least 5 characters'],
    maxlength: [24, 'Must be under 25 characters'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Must be at least 6 characters'],
    maxlength: [24, 'Must be under 25 characters'],
  },
  links: { type: Array },
  saved: { type: Array },
});

async function encryptPassword(next) {
  const hash = await argon2.hash(this.password);
  this.password = hash;
  next();
}

async function comparePassword(password) {
  const compare = await argon2.verify(this.password, password);
  return compare;
}

Users.pre('save', encryptPassword);
Users.methods.isValidPassword = comparePassword;

module.exports = mongoose.model('users', Users);
