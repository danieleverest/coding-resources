const mongoose = require('mongoose');

const { Schema } = mongoose;

const commentSchema = new Schema({
  comment: { type: String, required: true },
  replies: { type: Array },
  saved: { type: Array },
});

module.exports = mongoose.model('Comment', commentSchema);
