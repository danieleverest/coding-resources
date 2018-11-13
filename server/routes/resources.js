const router = require('express').Router();

const Resources = require('../db/models/resources');

router.post('/', async (req, res) => {
  try {
    const { resourceName, comments } = req.body;

    const resource = new Resources({
      resourceName,
      comments,
    });

    const newResource = await resource.save();

    res.json(newResource);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get('/', async (req, res) => {
  try {
    const resources = await Resources.find({});

    res.json(resources);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const resource = await Resources.findById(req.params.id);

    res.json(resource || 'Resource not found');
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const resource = await Resources.findByIdAndUpdate(req.params.id, { password: 123 });

    res.json(resource || 'Resource not found');
  } catch (error) {
    res.status(400).json(error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedResource = await Resources.findByIdAndDelete(req.params.id);

    res.json(deletedResource ? `Deleted ${deletedResource.resourceName}` : 'Resource not found');
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
