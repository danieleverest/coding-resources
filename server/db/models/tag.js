const mongoose = require('mongoose');

const { Schema } = mongoose;

const Tags = new Schema({ tag_name: { type: String } });

module.exports = mongoose.model('tags', Tags);
