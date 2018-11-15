const router = require('express').Router();
const { loginRequired } = require('../auth');
const Resource = require('../models/resource');

router.post('/', loginRequired, async (req, res) => {
  try {
    const { resourceName } = req.body;
    const submittedBy = req.user._id;

    const resource = new Resource({ resourceName, submittedBy });

    const newResource = await resource.save();

    res.json(newResource);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get('/', async (req, res) => {
  try {
    const resources = await Resource.find({});

    res.json(resources);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);

    res.json(resource || 'Resource not found');
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const resource = await Resource.findByIdAndUpdate(req.params.id);

    res.json(resource || 'Resource not found');
  } catch (error) {
    res.status(400).json(error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedResource = await Resource.findByIdAndDelete(req.params.id);

    res.json(deletedResource ? `Deleted ${deletedResource.resourceName}` : 'Resource not found');
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
