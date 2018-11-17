const router = require('express').Router({ mergeParams: true });
const { loginRequired } = require('../auth');
const Comment = require('../models/comment');
const Resource = require('../models/resource');

/**
 * Returns array of comments for resource
 * @public GET /resources/:resource_id/comments
 */
router.get('/', getAllComments);

/**
 * Returns a single comment
 * @public GET /resources/:resource_id/comments/:comment_id
 */
router.get('/:comment_id', getOneComment);

/**
 * Submit a comment
 * @private POST /resources/:resource_id/comments
 */
router.post('/', loginRequired, submitComment);

// Route functions
async function getAllComments(req, res) {
  try {
    const { comments } = await Resource.findById(req.params.resource_id);
    res.json({
      success: true,
      comments,
    });
  } catch ({ message }) {
    res.json({
      success: false,
      message,
    });
  }
}

async function getOneComment(req, res) {
  try {
    const comment = await Comment.findById(req.params.comment_id);
    res.json({
      success: true,
      comment,
    });
  } catch ({ message }) {
    res.status(401).json({
      success: false,
      message,
    });
  }
}

async function submitComment(req, res) {
  try {
    // save new comment
    const comment = await Comment.create({
      author: req.user._id,
      text: req.body.text,
    });
    // get relevant resource
    const resource = await Resource.findById(req.params.resource_id);
    // add new comment to resource and save
    resource.comments.push(comment);
    resource.save();

    res.status(200).json({
      success: true,
      comment,
    });
  } catch ({ message }) {
    res.status(400).json({
      success: false,
      message,
    });
  }
}

module.exports = router;
