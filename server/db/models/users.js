const mongoose = require('mongoose');

const { Schema } = mongoose;

const Users = new Schema({
  username: { type: String, required: true, unique: true, minlength: 5 },
  password: { type: String, required: true, minlength: 6 },
  links: { type: Array },
  saved: { type: Array },
});

module.exports = mongoose.model('users', Users);
