const { validationResult } = require('express-validator/check');
const Resource = require('../../models/resource');

const categories = require('./categories');

const getCategories = async (req, res) => res.status(200).json({ categories });

const getResources = async (req, res) => {
  const { category } = req.params;
  try {
    const resources = (category === 'all')
      ? await Resource.find()
      : await Resource.find({ category });
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
};

const getOneResource = async (req, res) => {
  try {
    const resource = await Resource
      .findById(req.params.id)
      .populate({
        path: 'comments',
        select: {
          path: 'author',
          select: 'name',
        },
      });
    // .populate('submittedBy');
    if (!resource) throw new Error('Resource not found').message;
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
};

const newResource = async (req, res) => {
  try {
    const errors = validationResult(req).array();
    if (errors.length) res.status(422).json({ errors });
    else {
      const { name, link, category, desc } = req.body;
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
        resourceId: resource._id,
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

const editResource = async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);

    if (!resource) throw new Error('Resource not found').message;
    if (!resource.submittedBy.equals(req.user._id)) throw new Error('You cannot edit resources you did not submit').message;

    const { update } = req.body;
    Object.assign(resource, update);
    await resource.save();

    res.status(200).json({
      success: true,
      message: 'Resource updated',
      resource,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

const deleteResource = async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);

    if (!resource) throw new Error('Resource not found').message;
    if (!resource.submittedBy.equals(req.user._id)) throw new Error('You cannot delete resources you did not submit').message;

    resource.delete();

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
};

module.exports = {
  getCategories,
  getResources,
  getOneResource,
  newResource,
  editResource,
  deleteResource,
};
