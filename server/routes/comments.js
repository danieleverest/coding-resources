const router = require('express').Router({ mergeParams: true });
const { loginRequired } = require('../auth');
const Comment = require('../models/comment');
const Resource = require('../models/resource');

router.get('/', getAllComments);
router.get('/:comment_id', getOneComment);
router.post('/', loginRequired, submitComment);

// Route functions
async function getAllComments(req, res) {
  try {
    const { comments } = await Resource.findById(req.params.resource_id);
    res.json({
      success: true,
      comments,
    });
  } catch (error) {
    console.log(JSON.stringify(error, Object.getOwnPropertyNames(error))
    )
    res.json({
      success: false,
      error: JSON.stringify(error, Object.getOwnPropertyNames(error)),
    });
  }
}

async function getOneComment(req, res) {
  try {
    const comment = await Comment
      .findById(req.params.comment_id)
      .populate('author', 'username');
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
