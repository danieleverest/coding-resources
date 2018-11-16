const router = require('express').Router();
const { loginRequired } = require('../auth');
const Resource = require('../models/resource');

router.post('/', loginRequired, async (req, res) => {
  try {
    const { resourceName } = req.body;
    const submittedBy = req.user._id;
    const resource = new Resource({ resourceName, submittedBy });
    await resource.save();

    res.status(200).json({
      success: false,
      message: 'New resource submitted',
    });
  } catch ({ message }) {
    res.status(400).json({
      success: false,
      message,
    });
  }
});

router.get('/', async (req, res) => {
  try {
    const resources = await Resource.find({});

    res.status(200).json({
      success: true,
      resources,
    });
  } catch ({ message }) {
    res.status(400).json({
      success: false,
      message,
    });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);
    if (!resource) throw new Error('Resource not found')
    res.status(200).json({
      success: true,
      resource,
    });
  } catch ({ message }) {
    res.status(400).json({
      success: false,
      message,
    });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { update } = req.body;
    const resource = await Resource.findById(req.params.id);
    if (!resource) throw new Error('Resource not found')
    Object.assign(resource, update);
    await resource.save();

    res.status(200).json({
      success: true,
      message: 'Resource updated',
      resource,
    });
  } catch ({ message }) {
    res.status(400).json({
      success: false,
      message,
    });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const resource = await Resource.findByIdAndDelete(req.params.id);
    if (!resource) throw new Error('Resource not found')
    res.status(200).json({
      success: true,
      resource,
    });
  } catch ({ message }) {
    res.status(400).json({
      success: false,
      message,
    });
  }
});

module.exports = router;
