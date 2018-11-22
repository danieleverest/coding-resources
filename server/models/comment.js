const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema.Types;

const commentSchema = new mongoose.Schema({
  author: {
    type: ObjectId,
    required: true,
    ref: 'User',
  },
  text: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Comment', commentSchema);
