const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema.Types;

const Comments = new mongoose.Schema({
  author: {
    type: ObjectId,
    required: [true, 'Must be logged in to comment'],
  },
  comment: {
    type: String,
    required: [true, 'Please enter a comment']
  },
  replies: { type: [ObjectId] },
});

module.exports = mongoose.model('comments', Comments);
