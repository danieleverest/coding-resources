const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema.Types;

const commentSchema = new mongoose.Schema({
  author: {
    type: ObjectId,
    required: [true, 'Must be logged in to comment'],
    ref: 'User',
  },
  text: {
    type: String,
    required: [true, 'Please enter a comment'],
  },
});

module.exports = mongoose.model('Comment', commentSchema);
