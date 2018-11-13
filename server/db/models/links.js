const mongoose = require('mongoose');

const { Schema } = mongoose;

const Links = new Schema({
  link: { type: String, required: true },
  submittedBy: { type: String },
  comments: { type: Array },
  tags: { type: Array },
});

module.exports = mongoose.model('links', Links);
