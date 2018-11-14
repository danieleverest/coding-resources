const mongoose = require('mongoose');

const { Schema } = mongoose;

const Resources = new Schema({
  resourceName: { type: String, required: true },
  submittedBy: { type: String },
  comments: { type: Array },
  tags: { type: Array },
});

module.exports = mongoose.model('resources', Resources);
