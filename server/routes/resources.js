const router = require('express').Router();
const { loginRequired } = require('../auth');
const Resource = require('../models/resource');

const CATEGORIES = [
  'JavaScript',
  'C++',
  'Java',
  'Python',
];

/**
 * Returns array of categories
 * @public GET /resources/categories
 */
router.get('/categories', (req, res) => res.send(CATEGORIES));

/**
 * Returns array of all resources
 * @public GET /resources
 */
router.get('/', getAllResources);

/**
 * Returns one resource
 * @public GET /resources/:id
 */
router.get('/:id', getOneResource);

/**
 * Submit a new resource
 * @private POST /resources
 */
router.post('/', loginRequired, newResource);

/**
 * Edit a resource
 * @private PUT /resources/:id
 */
router.put('/:id', loginRequired, editResource);

/**
 * Delete a resource
 * @private DELETE /resources/:id
 */
router.delete('/:id', loginRequired, deleteResource);

// router functions
async function getAllResources(req, res) {
  try {
    const resources = await Resource.find({});

    res.status(200).json({
      success: true,
      resources,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
}

async function getOneResource(req, res) {
  try {
    const resource = await Resource.findById(req.params.id);
    if (!resource) throw new Error('Resource not found');
    res.status(200).json({
      success: true,
      resource,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
}

async function newResource(req, res) {
  try {
    const { name, link, category, desc } = req.body;
    if (!CATEGORIES.includes(category)) throw new Error('Category does not exist');
    const submittedBy = req.user._id;
    const resource = new Resource({
      name,
      link,
      submittedBy,
      category,
      desc,
    });
    await resource.save();

    res.status(200).json({
      success: true,
      message: 'New resource submitted',
    });
  } catch ({ message }) {
    res.status(400).json({
      success: false,
      message,
    });
  }
}

async function editResource(req, res) {
  try {
    const resource = await Resource.findById(req.params.id);
    if (!resource) throw new Error('Resource not found');
    if (!resource.submittedBy.equals(req.user._id)) throw new Error('You cannot edit resources you did not submit');

    const { update } = req.body;
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
}

async function deleteResource(req, res) {
  try {
    const resource = await Resource.findById(req.params.id);
    if (!resource) throw new Error('Resource not found');
    if (!resource.submittedBy.equals(req.user._id)) throw new Error('You cannot delete resources you did not submit');

    resource.delete();

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
}
module.exports = router;
