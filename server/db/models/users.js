const mongoose = require('mongoose');

const { Schema } = mongoose;

const Users = new Schema({
  username: { type: String, required: true, minlength: 5, unique: true },
  password: { type: String, required: true, minlength: 6 },
  links: { type: Array, default: [] },
  saved: { type: Array, default: [] },
});

module.exports = mongoose.model('users', Users);
