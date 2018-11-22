const { validationResult } = require('express-validator/check');
const Resource = require('../../models/resource');

const categories = require('./categories');

const getCategories = async (req, res) => res.status(200).json({ categories });

const getAllResources = async (req, res) => {
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
};

const getOneResource = async (req, res) => {
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
    if (!resource) throw new Error('Resource not found');
    if (!resource.submittedBy.equals(req.user._id)) throw new Error('You cannot delete resources you did not submit');

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
  getAllResources,
  getOneResource,
  newResource,
  editResource,
  deleteResource,
};
