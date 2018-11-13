const mongoose = require('mongoose');

const { Schema } = mongoose;

const Users = new Schema({
  username: { type: String, required: true },
  user_id: { type: String, required: true },
  links: { type: Array },
  saved: { type: Array },
});

module.exports = mongoose.model('users', Users);
