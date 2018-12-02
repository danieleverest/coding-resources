const router = require('express').Router();
const { loginRequired } = require('../../auth');

const {
  getCategories,
  getResources,
  getOneResource,
  newResource,
  editResource,
  deleteResource,
} = require('./controller');

const { resourceValidation } = require('./validation');

router.get('/categories', getCategories);
router.get('/c/:category', getResources);
router.get('/:id', getOneResource);
router.post('/edit/:id', loginRequired, resourceValidation, editResource);
router.post('/', loginRequired, resourceValidation, newResource);
router.delete('/:id', loginRequired, deleteResource);

module.exports = router;
