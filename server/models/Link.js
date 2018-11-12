const mongoose = require('mongoose');

const { Schema } = mongoose;

const linkSchema = new Schema({
  link: { type: String, required: true },
  submittedBy: { type: String },
  comments: { type: Array },
  tags: { type: Array },
});

module.exports = mongoose.model('Link', linkSchema);
