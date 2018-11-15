const router = require('express').Router({ mergeParams: true });
const { loginRequired } = require('../auth');
const Comment = require('../models/comment');
const Resource = require('../models/resource');

router.get('/', async (req, res) => {
  try {
    const { comments } = await Resource.findById(req.params.resource_id);
    res.json({
      success: true,
      comments,
    });
  } catch (error) {
    res.json({
      success: false,
      message: 'Could not fetch comments',
      error,
    })
  }
});

router.get('/:comment_id', async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.comment_id);
    res.json({
      success: true,
      comment,
    });
  } catch (error) {
    res.json({
      success: false,
      message: 'Could not fetch comment',
      error,
    })
  }
});

router.post('/', loginRequired, async (req, res) => {
  try {
    // save new comment
    const comment = await Comment.create({
      author: req.user._id,
      text: req.body.text,
    });
    // get parent resource
    const resource = await Resource.findById(req.params.resource_id);
    // add new comment to resource and save
    resource.comments.push(comment);
    resource.save();

    res.json({
      success: true,
      comment,
    });
  } catch (error) {
    res.json({
      success: false,
      message: 'Could not add comment',
      error,
    });
  }
});

module.exports = router;
