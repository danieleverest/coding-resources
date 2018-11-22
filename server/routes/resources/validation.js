const { check } = require('express-validator/check');
const categories = require('./categories');

const isValidCategory = async (value) => {
  return categories.includes(value)
    ? Promise.resolve()
    : Promise.reject();
};

const newResourceValidation = [
  check('name')
    .trim()
    .escape()
    .isLength({ min: 1 })
    .withMessage('Please provide a name for the resource'),
  check('link')
    .trim()
    .escape()
    .isURL()
    .withMessage('Link should be a URL'),
  check('category')
    .trim()
    .escape()
    .custom(isValidCategory)
    .withMessage('That category does not exist'),
];

module.exports = {
  newResourceValidation,
}
