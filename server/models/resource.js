const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema.Types;

const resourceSchema = new mongoose.Schema({
  resourceName: {
    type: String,
    required: true,
  },
  submittedBy: {
    type: ObjectId,
    required: true,
    ref: 'User',
  },
  comments: [{
    type: ObjectId,
    ref: 'Comment',
  }],
  tags: [],
});

module.exports = mongoose.model('Resource', resourceSchema);
