const models = require('./models');
const mongoose = require('./mongoose');

module.exports.mongoose = mongoose;

module.exports.Comments = models.comments;
