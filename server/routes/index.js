const users = require('./users');
const resources = require('./resources');
const auth = require('./auth');
const comments = require('./comments');

module.exports = (app) => {
  app.use('/users', users);
  app.use('/auth', auth);
  app.use('/resources', resources);
  app.use('/resources/:resource_id/comments', comments);
};
