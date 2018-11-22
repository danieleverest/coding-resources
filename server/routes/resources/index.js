const router = require('express').Router();
const { loginRequired } = require('../../auth');

const {
  getCategories,
  getAllResources,
  getOneResource,
  newResource,
  editResource,
  deleteResource,
} = require('./controller');

const {
  newResourceValidation,
} = require('./validation');

router.get('/categories', getCategories);
router.get('/', getAllResources);
router.get('/:id', getOneResource);
router.post('/', loginRequired, newResourceValidation, newResource);
router.put('/:id', loginRequired, editResource);
router.delete('/:id', loginRequired, deleteResource);

module.exports = router;
