const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema.Types;

const resourceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  submittedBy: {
    type: ObjectId,
    required: true,
    ref: 'User',
  },
  category: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
  },
  tags: [{
    type: String,
    trim: true,
    lowercase: true,
  }],
  comments: [{
    type: ObjectId,
    ref: 'Comment',
  }],
  rank: {
    type: Number,
    default: 0,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Resource', resourceSchema);
