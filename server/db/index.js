const mongoose = require('./mongoose');
const models = require('./models');

module.exports.mongoose = mongoose;

module.exports.Comments = models.comments;
module.exports.Users = models.users;
